import React from "react";
import { useForm } from "react-hook-form";
import { PostFormProps } from "./model/types";
import { Modal, Input, Textarea, Upload, Button } from "../../shared/ui";
import { useAppDispatch } from "../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../shared/hooks/use-app-selector";
import { authActions } from "../../shared/model/slices/auth.slice";
import { ChangeMeMutation } from "./model/change-me-mutation";
import { User } from "../../shared/model/types/users.types";

const EditProfileForm = (props: PostFormProps) => {
  const { isShow, setIsShow } = props;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authSlice);
  const { changeMe } = ChangeMeMutation();
  const defaultSetPostForm = {
    name: user.name,
    description: user.description,
    image: "",
  };
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: defaultSetPostForm,
  });

  function saveUserProfileData(savedUserData: User) {
    setIsShow(false);
    changeMe(savedUserData)
      .unwrap()
      .then((res) => {
        dispatch(authActions.setUserName(res.data.name));
        dispatch(authActions.setUserDescription(res.data.description));
      });
  }

  return (
    <Modal value={isShow} setValue={setIsShow}>
      <div className="flex gap-[25px] flex-col">
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Имя"
          label="Имя"
          error={errors.name?.message}
        ></Input>
        <Textarea
          {...register("description", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors.description?.message}
          placeholder="Описание"
          label="Описание"
          textareaRows={5}
        ></Textarea>
        <Upload></Upload>
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit(saveUserProfileData)}
            label="Сохранить"
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileForm;

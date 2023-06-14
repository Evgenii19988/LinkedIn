import React from "react";
import { NewPostFormProps } from "./model/types";
import { Modal, Input, Textarea, Upload, Button } from "../../shared/ui";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../shared/hooks/use-app-selector";
import { authActions } from "../../shared/model/slices/auth.slice";

const EditProfileForm = (props: NewPostFormProps) => {
  const { isShow, setIsShow } = props;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authSlice);
  const defaultSetPostForm = {
    userName: user.name,
    userDescription: user.description,
    userAvatar: null,
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

  function saveUserProfileData() {
    dispatch(authActions.setUserName(getValues("userName")));
    dispatch(authActions.setUserDescription(getValues("userDescription")));
    setIsShow(false);
  }

  return (
    <Modal value={isShow} setValue={setIsShow}>
      <div className="flex gap-[25px] flex-col">
        <Input
          {...register("userName", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Имя"
          label="Имя"
          error={errors.userName?.message}
        ></Input>
        <Textarea
          {...register("userDescription", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors.userDescription?.message}
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

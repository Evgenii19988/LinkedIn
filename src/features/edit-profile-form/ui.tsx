import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PostFormProps } from "./model/types";
import { Modal, Input, Textarea, Upload, Button } from "../../shared/ui";
import { useAppDispatch } from "../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../shared/hooks/use-app-selector";
import { authActions } from "../../shared/model/slices/auth.slice";
import { ChangeMeMutation } from "./model/change-me-mutation";
import { User } from "../../shared/model/types/users.types";
import { useUpdateUserMutation } from "../../shared/model/api/users.api";

const EditProfileForm = (props: PostFormProps) => {
  const { isShow, setIsShow } = props;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authSlice);
  const { changeMe } = ChangeMeMutation();
  const defaultSetPostForm = {
    firstName: user.firstName,
    lastName: user.lastName,
    description: user.description,
    file: "",
  };
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultSetPostForm,
  });

  function saveUserProfileData(savedUserData: any) {
    setIsShow(false);
    updateUser({ id: savedUserData.id, user: savedUserData })
      .unwrap()
      .then((res) => {
        dispatch(authActions.setUserFirstName(res.firstName));
        dispatch(authActions.setUserDescription(res.description));
      });
  }

  return (
    <Modal value={isShow} setValue={setIsShow}>
      <div className="flex gap-[25px] flex-col">
        <Input
          {...register("firstName", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Имя"
          label="Имя"
          error={errors.firstName?.message}
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
        <Upload file={watch().file || ""} setFile={setValue}></Upload>
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

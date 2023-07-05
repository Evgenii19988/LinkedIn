import React from "react";
import { NewPostFormProps } from "./model/types";
import {
  Modal,
  Input,
  Textarea,
  Upload,
  Button,
  Loading,
} from "../../shared/ui";
import { useForm } from "react-hook-form";
import { Post } from "../../shared/model/types/posts.types";
import { useAppSelector } from "../../shared/hooks/use-app-selector";
import { AddPostMutation } from "./model/add-post-mutation";

const NewPostForm = (props: NewPostFormProps) => {
  const { isShow, setIsShow } = props;
  const defaultSetPostForm: Pick<Post, "name" | "text" | "file"> = {
    name: "",
    text: "",
    file: null,
  };
  const { user } = useAppSelector((state) => state.authSlice);
  const {
    watch,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: defaultSetPostForm,
  });
  const { addPost, isLoading: isLoadingAddPost } = AddPostMutation();

  function handleAddPost(data: Omit<Post, "id">) {
    addPost({ ...data, autor: user })
      .unwrap()
      .then(() => {
        setIsShow(false);
      });
  }

  return (
    <Modal value={isShow} setValue={setIsShow}>
      {isLoadingAddPost && <Loading></Loading>}
      <div className="flex gap-[25px] flex-col">
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Наименование поста"
          label="Наименование поста"
          error={errors.name?.message}
        ></Input>
        <Textarea
          {...register("text", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors.text?.message}
          placeholder="Введите текст"
          label="Текст поста"
          textareaRows={5}
        ></Textarea>
        <Upload></Upload>
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit(handleAddPost)}
            label="Создать"
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default NewPostForm;

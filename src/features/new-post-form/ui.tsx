import React, { useEffect } from "react";
import { PostFormProps } from "./model/types";
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
import { UpdatePostMutation } from "./model/edit-post-mutation";

const PostForm = (props: PostFormProps) => {
  const { isShow, setIsShow, type = "new", post } = props;
  const isEdit = type === "edit";
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
    setValue,
  } = useForm<Post>({
    defaultValues: defaultSetPostForm,
  });
  const { addPost, isLoading: isLoadingAddPost } = AddPostMutation();
  const { updatePost, isLoading: isLoadingUpdatePost } = UpdatePostMutation();
  useEffect(() => {
    if (!post) return;
    setValue("name", post?.name || "");
    setValue("text", post?.text || "");
  }, [post?.id]);

  function handleAddPost(data: Omit<Post, "id">) {
    addPost({ ...data, autor: user })
      .unwrap()
      .then(() => {
        setIsShow(false);
      });
  }

  function handleUpdatePost(data: Omit<Post, "id">) {
    if (!post?.id) return;
    updatePost({ id: Number(post?.id), post: { ...data, autor: user } })
      .unwrap()
      .then(() => {
        setIsShow(false);
      });
  }

  return (
    <Modal value={isShow} setValue={setIsShow}>
      {(isLoadingAddPost || isLoadingUpdatePost) && <Loading />}
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
            onClick={handleSubmit(isEdit ? handleUpdatePost : handleAddPost)}
            label={isEdit ? "Редактировать" : "Создать"}
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default PostForm;

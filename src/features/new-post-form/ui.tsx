import React, { useRef } from "react";
import { NewPostFormProps } from "./model/types";
import { Modal, Input, Textarea, Upload, Button } from "../../shared/ui";
import { useForm } from "react-hook-form";
import { Post } from "../../shared/model/types/posts.types";

const NewPostForm = (props: NewPostFormProps) => {
  const { isShow, setIsShow } = props;
  const defaultSetPostForm: Post = {
    name: "",
    text: "",
    file: null,
  };
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: defaultSetPostForm,
  });

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
            onClick={handleSubmit(() => console.log(errors))}
            label="Создать"
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default NewPostForm;

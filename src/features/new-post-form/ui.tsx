import React, { useRef } from "react";
import { NewPostFormProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";
import { Modal, Input, Textarea, Upload, Button } from "../../shared/ui";
import { useForm } from "react-hook-form";

const NewPostForm = (props: NewPostFormProps) => {
  const { isShow, setIsShow } = props;
  const defaultSetPostForm = {
    postName: "",
    postText: "",
    postFile: null,
  };
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultSetPostForm,
  });

  return (
    <Modal value={isShow} setValue={setIsShow}>
      <div className="flex gap-[25px] flex-col">
        <Input
          {...register("postName", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Наименование поста"
          label="Наименование поста"
          error={errors.postName?.message}
        ></Input>
        <Textarea
          {...register("postText", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors.postText?.message}
          placeholder="Введите текст"
          label="Введите текст"
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

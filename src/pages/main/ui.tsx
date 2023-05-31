import React, { FC, useState } from "react";
import { Profile } from "../../widgets/main/profile";
import { Sidebar } from "../../widgets/main/sidebar";
import { FriendsBlock } from "../../widgets/main/friends-block";
import { CoursesPopuler } from "../../widgets/main/courses-populer";
import { FriendSlider } from "../../features/friend-slider";
import { CorporationMenu } from "../../widgets/main/corporation-menu";
import { StartPost } from "../../widgets/main/start-post";
import { Input, Modal, Textarea, Upload } from "../../shared/ui";
import Button from "../../shared/ui/button/button";
import { useForm } from "react-hook-form";

const MainPage: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const defaultSetPostForm = {
    postName: "",
    postText: "",
    file: null,
  };
  const { watch, register, handleSubmit } = useForm({
    defaultValues: defaultSetPostForm,
  });
  console.log({ ...register });

  return (
    <div
      onClick={() => console.log({ ...register })}
      className="flex gap-[29px]"
    >
      <div className="flex flex-col gap-[21px] w-[292px]">
        <Profile></Profile>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">
        <FriendSlider />
        <StartPost value={isShow} setValue={setIsShow} />
      </div>
      <div className="flex flex-col gap-[21px] w-[292px]">
        <FriendsBlock />
        <CoursesPopuler />
        <CorporationMenu />
      </div>
      <Modal value={isShow} setValue={setIsShow}>
        <div className="flex gap-[20px] flex-col">
          <Input
            {...register("postName", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
            })}
            placeholder="Наименование поста"
          ></Input>
          {JSON.stringify(register)}
          <Textarea placeholder="Введите текст" textareaRows={5}></Textarea>
          <Upload></Upload>
          <div className="flex justify-center">
            <Button label="Создать"></Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainPage;

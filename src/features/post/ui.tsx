import React, { FC, useRef, useState } from "react";
import Icon from "../../shared/icons";
import { Avatar } from "../../shared/ui";
import { IconName } from "../../shared/icons/model/icon.types";
import CommentInput from "../../entities/comment-input";
import { PostProps } from "./model/post.types";
import { PostForm } from "../new-post-form";
import { useAppSelector } from "../../shared/hooks/use-app-selector";

const Post: FC<PostProps> = (props) => {
  const { post } = props;
  const ref = useRef<HTMLDivElement>(null);
  const textHeight = ref?.current?.scrollHeight;
  const [isHidedText, setIsHidedText] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const { user } = useAppSelector((state) => state.authSlice);
  const menuItem = (
    iconName: IconName,
    text: string,
    color = "",
    onClick?: () => void,
    isDisabled?: boolean
  ) => {
    return (
      <div
        onClick={() => {if (!isDisabled) onClick?.()}}
        className="flex gap-[5px] items-center text-mainBlack cursor-pointer"
      >
        <Icon color={color} iconName={iconName} />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <>
      <div className="text-xs bg-white rounded-[32px] px-[20px] py-[30px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center">
              <Avatar
                borderSize={0}
                imageSize={60}
                borderColor="none"
                image={post.author.image}
              ></Avatar>
            </div>
            <div className="flex flex-col gap-[5px] ml-[4px]">
              <h3 className="text-sm font-medium">
                {post?.author?.firstName + " " + post?.author?.lastName}
              </h3>
              <span>{post?.author?.description}</span>
              <span>1 hr ago</span>
            </div>
          </div>
          <div>
            <Icon iconName="MoreVertical"></Icon>
          </div>
        </div>
        <p className="mt-[20px] font-medium">{post.name}</p>
        <div className="w-full h-[227px] mt-[5px]">
          <img
            className="w-full h-[227px] object-cover"
            src={String(post.file) || ""}
            alt=""
          />
        </div>
        <div
          style={{
            maxHeight: isHidedText ? "32px" : `${textHeight}px`,
          }}
          ref={ref}
          className={`mt-[5px] overflow-hidden transition-all ${
            isHidedText && `line-clamp-2`
          }`}
        >
          {post.text}
        </div>
        <div
          onClick={() => setIsHidedText(!isHidedText)}
          className="flex justify-end mt-[15px] gap-[5px] cursor-pointer"
        >
          <div
            className={`flex items-center justify-center ${
              isHidedText ? "" : "rotate-180"
            }`}
          >
            <Icon
              color="rgb(39 174 96 / var(--tw-text-opacity))"
              iconName="ArrowBottom"
            ></Icon>
          </div>
          <span className="text-darkGreen font-medium">More Article</span>
        </div>
        <div className="flex justify-around mt-[12px]">
          {menuItem("Like", "Like")}
          {menuItem("Comment", "Comment")}
          {menuItem("Bookmark", "Saved", "rgba(7, 9, 40, 0.75)")}
          {menuItem("Send", "Send", "rgba(7, 9, 40, 0.75)")}
          {post?.author?.id === user.id && menuItem("Share", "Edit", "rgba(7, 9, 40, 0.75)", () =>
            setIsShow(true), post?.author?.id !== user.id
          )}
        </div>
        <div className="flex mt-[28px]">
          <div className="flex items-center mr-[11px]">
            <Avatar
              borderSize={0}
              imageSize={48}
              image="images/WawanPurwanto.png"
            />
          </div>
          <CommentInput placeholder="add Comment..." />
        </div>
      </div>
      <PostForm post={post} type="edit" isShow={isShow} setIsShow={setIsShow} />
    </>
  );
};

export default Post;

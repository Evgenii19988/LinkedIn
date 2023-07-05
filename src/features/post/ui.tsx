import React, { FC, useRef, useState } from "react";
import Icon from "../../shared/icons";
import { Avatar } from "../../shared/ui";
import { IconName } from "../../shared/icons/model/icon.types";
import CommentInput from "../../entities/comment-input";
import { PostProps } from "./model/post.types";

const Post: FC<PostProps> = (props) => {
  const { post } = props;
  const ref = useRef<HTMLDivElement>(null);
  const textHeight = ref?.current?.scrollHeight;
  const [isHidedText, setIsHidedText] = useState(true);
  const menuItem = (iconName: IconName, text: string, color = "") => {
    return (
      <div className="flex gap-[5px] items-center text-mainBlack cursor-pointer">
        <Icon color={color} iconName={iconName} />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div className="text-xs bg-white rounded-[32px] px-[20px] py-[30px]">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center">
            <Avatar
              borderSize={0}
              imageSize={60}
              borderColor="none"
              image="images/Julie.png"
            ></Avatar>
          </div>
          <div className="flex flex-col gap-[5px] ml-[4px]">
            <h3 className="text-sm font-medium">{post?.autor?.name}</h3>
            <span>{post?.autor?.description}</span>
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
          src="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/7/65/755540270893657.jpg"
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
      <div className="flex justify-end">
        <span
          onClick={() => setIsHidedText(!isHidedText)}
          className="cursor-pointer mt-[15px] text-darkGreen font-medium"
        >
          More Article
        </span>
      </div>
      <div className="flex justify-around mt-[12px]">
        {menuItem("Like", "Like")}
        {menuItem("Comment", "Comment")}
        {menuItem("Bookmark", "Saved", "rgba(7, 9, 40, 0.75)")}
        {menuItem("Send", "Send", "rgba(7, 9, 40, 0.75)")}
        {menuItem("Share", "Share", "rgba(7, 9, 40, 0.75)")}
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
  );
};

export default Post;

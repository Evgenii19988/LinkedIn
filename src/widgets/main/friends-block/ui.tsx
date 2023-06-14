import React, { FC } from "react";
import MoreButton from "../../../shared/ui/more-button";
import { NewFriendCard } from "../../../entities/new-friend-card";

const FriendsBlock: FC = () => {
  return (
    <div className="flex flex-col gap-[15px] w-[292px] pl-[8px] pr-[32px] pt-[39px] pb-[45px] rounded-[32px] bg-white text-xs">
      <div className="flex justify-between font-medium text-sm">
        <h3>Following</h3>
        <MoreButton arrowPosition="right" />
      </div>
      <NewFriendCard
        name="Jhon Robert"
        description="Product Designer at dsgn.id"
      ></NewFriendCard>
      <NewFriendCard
        name="Dika"
        description="Product Designer at dsgn.id"
      ></NewFriendCard>
      <NewFriendCard
        name="Josh UI"
        description="Product Designer at dsgn.id"
      ></NewFriendCard>
      <NewFriendCard
        name="Billy Code"
        description="Product Designer at dsgn.id"
      ></NewFriendCard>
      <p className="text-darkGreen font-sm">More Recomendation</p>
    </div>
  );
};

export default FriendsBlock;

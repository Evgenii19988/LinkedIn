import React, { FC } from "react";
import { getLinkClassName } from "./category-link.styles";
import { NavLink } from "react-router-dom";
import Icon from "../../icons";
import { CategoryLinkProps } from "./category-link.types";

const CategoryLink: FC<CategoryLinkProps> = (props) => {
  const { iconName, link } = props;

  return (
    <NavLink to={link} className={({isActive}) => getLinkClassName(isActive)}>
      <Icon iconName={iconName}></Icon>
    </NavLink>
  );
};

export default CategoryLink;

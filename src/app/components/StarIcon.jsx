import React from "react";
import { Star } from "@phosphor-icons/react";
import Icon from "./Icon";

function StarIcon(props) {
  const starArray = Array.from({ length: props.count });
  return (
    <div>
      {starArray.map((star, index) => (
        <Icon key={index} icon={Star} weight="fill" />
      ))}
    </div>
  );
}

export default StarIcon;

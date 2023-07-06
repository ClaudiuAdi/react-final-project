import React from "react";
import { Star } from "@phosphor-icons/react";
import Icon from "./Icon";

function StarIcon(props) {
  const starArray = Array.from({ length: props.count });
  // creates an array of 5 with the number of stars that the hotel has, if it doesnt have 5, it is filled with empty stars until there are 5 total
  // const starArray = Array.from({ length: 5 }, (_, index) =>
  //   index < props.count ? "fill" : "regular"
  // );

  return (
    <div>
      {starArray.map((star, index) => (
        // <Icon key={index} icon={Star} weight={star} />
        <Icon key={index} icon={Star} weight="fill" />
      ))}
    </div>
  );
}

export default StarIcon;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function StarIcon(props) {
  const starArray = Array.from({ length: props.count });

  return (
    <div>
      {starArray.map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
    </div>
  );
}

export default StarIcon;

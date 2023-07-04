import React from "react";

function Icon({ weight = "thin", ...props }) {
  return <props.icon weight={weight} className={props.className} />;
}

export default Icon;

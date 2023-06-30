import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";

function StarIcon(props) {
  const starArray = Array.from({ length: props.count });

  return (
    <div>
      {starArray.map((_, index) => (
        <IonIcon key={index} icon={starOutline} />
      ))}
    </div>
  );
}

export default StarIcon;

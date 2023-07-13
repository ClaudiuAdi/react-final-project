import React, { forwardRef, useState } from "react";
import styles from "./Hero.module.css";
import { poppins, prata } from "../utils/fonts";
import heroHotels from "../data/heroImages.json";
import Icon from "./Icon";
import {
  Circle,
  Diamond,
  MapPin,
  RadioButton,
  Rectangle,
} from "@phosphor-icons/react";

const Welcome = forwardRef(function (props, ref) {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageClass = {
    backgroundImage: `url(${heroHotels[activeIndex]["hotel_image"]})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex >= heroHotels.length) {
      newIndex = heroHotels.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      <section className={styles["hero-section"] + " " + prata.className}>
        <div className={`${styles["hero-container"]}`} style={imageClass}>
          <div className={styles["hero-image-overlay"]} ref={ref}>
            <h1 className={props.className}>
              Hotels for moments
              <br />
              in emotions
            </h1>
            <h2 className={styles["encouraging-text"] + " " + props.className}>
              Book now and get the best prices
            </h2>
            <div
              className={styles["welcome-buttons"] + " " + poppins.className}
            >
              <button
                className={styles["booking-button"] + " " + props.className}
              >
                BOOK NOW
              </button>
              <button
                className={styles["learn-more-button"] + " " + props.className}
              >
                LEARN MORE
              </button>
              <div className={styles["hero-images"] + " " + props.className}>
                {heroHotels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <Icon
                      icon={Rectangle}
                      weight={index === activeIndex ? "fill" : "thin"}
                      className={styles["hero-image-naviagtion"]}
                    />
                  </button>
                ))}
              </div>

              <div
                className={
                  styles["hero-hotel-location"] + " " + props.className
                }
              >
                <Icon
                  icon={MapPin}
                  weight="light"
                  className={styles["hero-hotel-location-icon"]}
                />
                <span>{heroHotels[activeIndex]["location"]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Welcome;

import React, { forwardRef, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { poppins, prata } from "../utils/fonts";
import heroHotels from "../data/heroImages.json";
import Icon from "./Icon";
import { MapPin, Rectangle } from "@phosphor-icons/react";

const Welcome = forwardRef(function (props, ref) {
  const [activeIndex, setActiveIndex] = useState(0);

  const bookingRef = useRef();
  const learnMoreRef = useRef();

  const hotelLinkClickHandler = (e) => {
    handleClick(e, bookingRef);
  };
  const learnMoreLinkClickHandler = (e) => {
    handleClick(e, learnMoreRef);
  };

  const handleClick = (e, ref) => {
    e.preventDefault();

    const href = ref.current.getAttribute("href");

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                onClick={hotelLinkClickHandler}
                ref={bookingRef}
                href="#booking"
              >
                BOOK A STAY
              </button>
              <button
                className={styles["learn-more-button"] + " " + props.className}
                onClick={learnMoreLinkClickHandler}
                ref={learnMoreRef}
                href="#engage"
              >
                LEARN MORE
              </button>
            </div>
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
                styles["hero-hotel-location"] + " " + poppins.className
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
      </section>
    </>
  );
});

export default Welcome;

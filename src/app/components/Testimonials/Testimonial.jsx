import React, { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";
import { poppins, prata } from "../../utils/fonts";
import quotations_image from "../../resources/download.svg";
import Image from "next/image";

function Testimonial(props) {
  const [testimonialAnimation, setTestimonialAnimation] = useState(false);

  useEffect(() => {
    setTestimonialAnimation(true);

    const timer = setTimeout(() => {
      setTestimonialAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [props]);

  const testimonialClass = `${
    testimonialAnimation ? styles["fade-in-animation"] : ""
  }`;

  return (
    <div className={props.className}>
      <div className={styles["testimonial-photo-container"]}>
        <Image
          src={props.testimonial.image}
          alt="User testimonial image"
          width={900}
          height={900}
          className={testimonialClass}
        />
      </div>

      <div
        className={`${styles["testimonial-info"]} ${prata.className} ${testimonialClass}`}
      >
        {/* <img
        className={styles["testimonial-quotations"]}
        src={quotations_image.src}
        alt=""
      /> */}
        <h2 className={styles["testimonial-text"]}>
          {props.testimonial.quote}
        </h2>
        <div className={styles["testimonial-details"]}>
          <p className={styles["testimonial-author"]}>
            {props.testimonial.name}
          </p>
          <span className={styles["small-bar"]}></span>
          <span
            className={`${styles["testimonial-date"]} ${poppins.className}`}
          >
            {props.testimonial.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

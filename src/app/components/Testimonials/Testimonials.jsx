import React, { forwardRef, useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";
import Testimonial from "./Testimonial";
import testimonialsData from "../../data/testimonials.json";
import { prata } from "../../utils/fonts";

const Testimonials = forwardRef(function (props, ref) {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <SectionTitle
        title={"TESTIMONIALS"}
        axis={"horizontal"}
        id="testimonials"
      />
      <section className={styles["testimonials-section"]} ref={ref}>
        <p
          className={`
            ${styles["testimonials-section-subtitle"]} ${prata.className}
          `}
        >
          Luxurious Retreats, Rave Reviews
        </p>
        <div>
          <button className={styles["left-button"]} onClick={prevTestimonial}>
            <Icon
              icon={ArrowLeft}
              weight="regular"
              className={styles["advantage-icon"]}
            />
          </button>
          {testimonials.length > 0 && (
            <Testimonial
              className={`${styles["testimonial"]} ${props.className}`}
              testimonial={testimonials.at(currentIndex)}
            />
          )}
          <button className={styles["right-button"]} onClick={nextTestimonial}>
            <Icon
              icon={ArrowRight}
              weight="regular"
              className={styles["advantage-icon"]}
            />
          </button>
        </div>
      </section>
    </>
  );
});
export default Testimonials;

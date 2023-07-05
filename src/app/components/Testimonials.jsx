import React from "react";
import styles from "./Testimonials.module.css";
import { poppins, prata } from "../utils/fonts";
import john_dias from "../resources/john-dias.jpg";
// import quotations_image from "../resources/quotationMarks.png";
import quotations_image from "../resources/download.svg";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <>
      <SectionTitle title={"TESTIMONIALS"} axis={"horizontal"} />
      <section className={styles["testimonials-section"]}>
        <div className={styles["testimonial-photo-part"]}>
          <div className={styles["testimonial-photo-container"]}>
            <img src={john_dias.src} alt="User testimonial image" />
          </div>
        </div>
        <div className={styles["testimonial"]}>
          <div className={styles["testimonial-info"] + " " + prata.className}>
            <img
              className={styles["testimonial-quotations"]}
              src={quotations_image.src}
              alt=""
            />
            <h2 className={styles["testimonial-text"]}>
              They are not typical hotels you see out there. They have taken
              care of every last detail. They are very comfortable and the truth
              is that you are almost better than home. We will come back for
              sure!
            </h2>
            <div className={styles["testimonial-details"]}>
              <p className={styles["testimonial-author"]}>John</p>
              <span className={styles["small-bar"]}></span>
              <span
                className={styles["testimonial-date"] + " " + poppins.className}
              >
                MAI 2023
              </span>
            </div>
          </div>
          <div className={styles["testimonial-navigation"]}>
            <div className={styles["navigation-buttons"]}>
              <button className={styles["left-button"]}>
                <Icon
                  icon={ArrowLeft}
                  weight="regular"
                  className={styles["advantage-icon"]}
                />
              </button>
              <button className={styles["right-button"]}>
                <Icon
                  icon={ArrowRight}
                  weight="regular"
                  className={styles["advantage-icon"]}
                />
              </button>
            </div>
            <span className={styles["big-bar"]}></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

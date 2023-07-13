import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { poppins } from "../utils/fonts";

const Header = forwardRef(function (props, ref) {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 860) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const hotelLinkRef = useRef();
  const advantagesRef = useRef();
  const testimonialsRef = useRef();
  const bookingRef = useRef();
  const topRef = useRef();

  const hotelLinkClickHandler = (e) => handleClick(e, hotelLinkRef);
  const advantagesLinkClickHandler = (e) => handleClick(e, advantagesRef);
  const testimonialsLinkClickHandler = (e) => handleClick(e, testimonialsRef);
  const bookingLinkClickHandler = (e) => handleClick(e, bookingRef);
  const topLinkClickHandler = (e) => handleClick(e, topRef);

  const handleClick = (e, ref) => {
    e.preventDefault();

    const href = ref.current.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`${styles.container} ${poppins.className} ${
        fix && styles.fixed
      }`}
    >
      <div ref={ref} className={props.className}>
        <span
          className={styles["logo"]}
          href="#"
          ref={topRef}
          onClick={topLinkClickHandler}
        >
          logo
        </span>
        <div className={styles.menu}>
          <a
            className={styles["link"]}
            href="#hotels"
            ref={hotelLinkRef}
            onClick={hotelLinkClickHandler}
          >
            Our Hotels
          </a>
          <a
            className={styles["link"]}
            href="#advantages"
            ref={advantagesRef}
            onClick={advantagesLinkClickHandler}
          >
            Why book with us
          </a>
          <a
            className={styles["link"]}
            href="#testimonials"
            ref={testimonialsRef}
            onClick={testimonialsLinkClickHandler}
          >
            Testimonials
          </a>
          <a
            href="#booking"
            ref={bookingRef}
            onClick={bookingLinkClickHandler}
            className={`${styles["link"]} ${styles["book-link"]}`}
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;

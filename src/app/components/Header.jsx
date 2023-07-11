import React, { useRef } from "react";
import styles from "./Header.module.css";
import { poppins } from "../utils/fonts";

function Header() {
  const handleClick = (e, ref) => {
    e.preventDefault();

    const href = ref.current.getAttribute("href");

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hotelLinkRef = useRef();
  const advantagesRef = useRef();
  const testimonialsRef = useRef();

  const hotelLinkClickHandler = (e) => handleClick(e, hotelLinkRef);
  const advantagesLinkClickHandler = (e) => handleClick(e, advantagesRef);
  const testimonialsLinkClickHandler = (e) => handleClick(e, testimonialsRef);

  return (
    <header className={styles.container}>
      <span className={styles["logo"]}>logo</span>
      <div className={styles.menu}>
        <a
          className={styles["link"] + " " + poppins.className}
          href="#hotels"
          ref={hotelLinkRef}
          onClick={hotelLinkClickHandler}
        >
          Our Hotels
        </a>
        <a
          className={styles["link"] + " " + poppins.className}
          href="#advantages"
          ref={advantagesRef}
          onClick={advantagesLinkClickHandler}
        >
          Why book with us
        </a>
        <a
          className={styles["link"] + " " + poppins.className}
          href="#testimonials"
          ref={testimonialsRef}
          onClick={testimonialsLinkClickHandler}
        >
          Testimonials
        </a>
      </div>
      {/* <a href="">Book now</a> */}
    </header>
  );
}

export default Header;

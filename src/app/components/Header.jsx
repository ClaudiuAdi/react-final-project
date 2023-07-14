import React, { forwardRef, useRef, useState } from "react";
import styles from "./Header.module.css";
import { poppins } from "../utils/fonts";
import Logo from "./Logo";

const Header = forwardRef(function (props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // state for the navbar to stay fixed after the hero section
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 860) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  // refs for navigation in the page
  const hotelLinkRef = useRef();
  const advantagesRef = useRef();
  const testimonialsRef = useRef();
  const bookingRef = useRef();
  const topRef = useRef();

  const hotelLinkClickHandler = (e) => {
    handleClick(e, hotelLinkRef);
    setIsOpen(false);
  };
  const advantagesLinkClickHandler = (e) => {
    handleClick(e, advantagesRef);
    setIsOpen(false);
  };
  const testimonialsLinkClickHandler = (e) => {
    handleClick(e, testimonialsRef);
    setIsOpen(false);
  };
  const bookingLinkClickHandler = (e) => {
    handleClick(e, bookingRef);
    setIsOpen(false);
  };
  const topLinkClickHandler = (e) => {
    handleClick(e, topRef);
    setIsOpen(false);
  };

  const handleClick = (e, ref) => {
    e.preventDefault();

    const href = ref.current.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

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
          <Logo />
        </span>
        <div
          className={`${styles.menu} ${isOpen ? styles["is-open"] : ""} ${
            isOpen && fix ? styles["is-not-open-on-hero"] : ""
          }`}
        >
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
            BOOK NOW
          </a>
        </div>
        <div
          className={`${styles["burger-menu"]} ${
            isOpen ? styles["active"] : ""
          }`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
});

export default Header;

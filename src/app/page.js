"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels/Hotels";
import Advantages from "./components/Advantages/Advantages";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { ModalContextProvider } from "./store/modal-context";
import styles from "./page.module.css";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Home() {
  const [headerRef, isHeaderIntercepting] = useIntersectionObserver();
  const [heroRef, isHeroIntercepting] = useIntersectionObserver();
  const [engageRef, isEngageIntercepting] = useIntersectionObserver();
  const [hotelsRef, isHotelsIntercepting] = useIntersectionObserver();
  const [advantagesRef, isAdvantagesIntercepting] = useIntersectionObserver();
  const [testimonialsRef, isTestimonialsIntercepting] =
    useIntersectionObserver();
  const [bookingRef, isBookingIntercepting] = useIntersectionObserver();

  return (
    <ModalContextProvider>
      <Header
        ref={headerRef}
        className={isHeaderIntercepting ? styles["animate-scroll"] : ""}
      />
      <Hero
        ref={heroRef}
        className={isHeroIntercepting ? styles["animate-scroll"] : ""}
      />
      <Engage
        ref={engageRef}
        className={isEngageIntercepting ? styles["animate-scroll"] : ""}
      />
      <Hotels
        ref={hotelsRef}
        className={isHotelsIntercepting ? styles["animate-scroll"] : ""}
      />
      <Advantages
        ref={advantagesRef}
        className={isAdvantagesIntercepting ? styles["animate-scroll"] : ""}
      />
      <Testimonials
        ref={testimonialsRef}
        className={isTestimonialsIntercepting ? styles["animate-scroll"] : ""}
      />
      <Booking
        ref={bookingRef}
        className={isBookingIntercepting ? styles["animate-scroll"] : ""}
      />
      <Footer />
    </ModalContextProvider>
  );
}

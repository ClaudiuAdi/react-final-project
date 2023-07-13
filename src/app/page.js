"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels/Hotels";
import Advantages from "./components/Advantages/Advantages";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { BookingContextProvider } from "./store/form-context";
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
    <BookingContextProvider>
      <Header
        ref={headerRef}
        className={isHeaderIntercepting ? styles.anim : ""}
      />
      <Hero ref={heroRef} className={isHeroIntercepting ? styles.anim : ""} />
      <Engage
        ref={engageRef}
        className={isEngageIntercepting ? styles.anim : ""}
      />
      <Hotels
        ref={hotelsRef}
        className={isHotelsIntercepting ? styles.anim : ""}
      />
      <Advantages
        ref={advantagesRef}
        className={isAdvantagesIntercepting ? styles.anim : ""}
      />
      <Testimonials
        ref={testimonialsRef}
        className={isTestimonialsIntercepting ? styles.anim : ""}
      />
      <Booking
        ref={bookingRef}
        className={isBookingIntercepting ? styles.anim : ""}
      />
      <Footer />
    </BookingContextProvider>
  );
}

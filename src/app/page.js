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

export default function Home() {
  return (
    <BookingContextProvider>
      <Header />
      <Hero />
      <Engage />
      <Hotels />
      <Advantages />
      <Testimonials />
      <Booking />
      <Footer />
    </BookingContextProvider>
  );
}

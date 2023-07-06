import { Prata, Poppins } from "next/font/google";

export const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

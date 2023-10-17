"use client";
import { SplideSlide as ReactSplideSlide } from "@splidejs/react-splide";

interface SplideSlideProps {
  children: React.ReactNode;
}

const SplideSlide = ({ children }: SplideSlideProps) => {
  return <ReactSplideSlide>{children}</ReactSplideSlide>;
};

export default SplideSlide;

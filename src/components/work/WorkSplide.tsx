"use client";
import { Splide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";
import SplideTrack from "../splide/SplideTrack";

interface WorkSplideProps {
  children: React.ReactNode;
}

const WorkSplide = ({ children }: WorkSplideProps) => {
  return (
    <Splide hasTrack={false}>
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  );
};

export default WorkSplide;

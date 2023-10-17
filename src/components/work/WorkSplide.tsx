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
      <div className="max-w-[780px] rounded-lg overflow-hidden group">
        <SplideTrack>{children}</SplideTrack>
      </div>

      <div className="splide__pagination !-bottom-7"></div>
    </Splide>
  );
};

export default WorkSplide;

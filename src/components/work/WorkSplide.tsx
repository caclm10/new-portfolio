"use client";
import { Splide } from "@splidejs/react-splide";
import SplideTrack from "../splide/SplideTrack";

// Default theme
import "@splidejs/react-splide/css";
import WorkSplideControls from "./WorkSplideControls";

interface WorkSplideProps {
  children: React.ReactNode;
}

const WorkSplide = ({ children }: WorkSplideProps) => {
  return (
    <Splide hasTrack={false}>
      <WorkSplideControls />

      <div className="relative max-w-[780px] rounded-lg overflow-hidden group">
        <SplideTrack>{children}</SplideTrack>
      </div>
    </Splide>
  );
};

export default WorkSplide;

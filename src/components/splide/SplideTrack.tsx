"use client";
import { SplideTrack as ReactSplideTrack } from "@splidejs/react-splide";

interface SplideTrackProps {
  children: React.ReactNode;
}

const SplideTrack = ({ children }: SplideTrackProps) => {
  return <ReactSplideTrack>{children}</ReactSplideTrack>;
};

export default SplideTrack;

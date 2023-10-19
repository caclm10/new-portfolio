"use client";
import { useUiStore } from "@/stores/ui-store";

const WorkSplideControls = () => {
  const workItemImageHeight = useUiStore((state) => state.workItemImageHeight);
  return (
    <div
      className="absolute inset-x-0 top-0"
      style={{
        height: `${workItemImageHeight}px`,
      }}
    >
      <div className="relative h-full">
        <div className="splide__arrows"></div>
        <div className="splide__pagination"></div>
      </div>
    </div>
  );
};

export default WorkSplideControls;

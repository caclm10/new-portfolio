"use client";
import { useEffect } from "react";
import useElementHeight from "@/hooks/use-element-height";
import { useUiStore } from "@/stores/ui-store";

interface WorkListItemImageWrapperProps {
  children: React.ReactNode;
}

const WorkListItemImageWrapper = ({
  children,
}: WorkListItemImageWrapperProps) => {
  const setWorkItemImageHeight = useUiStore(
    (state) => state.setWorkItemImageHeight
  );
  const [ref, height] = useElementHeight();

  useEffect(() => {
    setWorkItemImageHeight(height);
  }, [height, setWorkItemImageHeight]);

  return (
    <div ref={ref} className="w-full max-w-[780px] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default WorkListItemImageWrapper;

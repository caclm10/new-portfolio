"use client";

import { useStore } from "@nanostores/react";
import { $fetchingQuote } from "./store";

export default function Spinner() {
  const fetchingQuote = useStore($fetchingQuote);

  if (!fetchingQuote) return null;

  return (
    <div
      id="loader-container"
      className="absolute flex justify-center items-center inset-0 z-[5] bg-[rgba(17,_17,_17,_0.5)]"
    >
      <div
        className="animate-spin inline-block w-16 h-16 border-[0.4rem] border-current border-t-transparent text-primary-400 rounded-full dark:text-primary-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

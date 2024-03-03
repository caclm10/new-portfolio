"use client";

import { useStore } from "@nanostores/react";
import { $fetchedQuote } from "./store";

export default function Quote() {
  const fetchedQuote = useStore($fetchedQuote);
  return (
    <>
      <div className="mb-2 after:content-[''] after:block after:clear-both">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/caclm10/quote-generator/94f2934e28500520d9e41f24335ce359764161e6/icons/quote.svg"
          alt="quote"
          className="mr-4 float-left text-white w-[44px] h-[44px]"
        />
        <span id="quote-content" className="text-3xl leading-[2.75rem]">
          {fetchedQuote?.content}
        </span>
      </div>

      <div className="mb-6 flex justify-end text-base">
        ~ &nbsp;
        <span className="inline-flex italic items-center" id="author-name">
          {fetchedQuote?.author}
        </span>
      </div>
    </>
  );
}

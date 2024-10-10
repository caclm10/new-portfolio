"use client";

import { Button } from "@/components/shared/button";
import { useEffect } from "react";
import { $fetchedQuote, $fetchingQuote } from "./store";

// https://api.quotable.io/random
export default function NewButton() {
  async function fetchQuote() {
    $fetchingQuote.set(true);
    try {
      const url = `https://quoteslate.vercel.app/api/quotes/random`;

      const resp = await fetch(url);

      if (!resp.ok) throw resp;

      const { author, quote } = await resp.json();

      $fetchedQuote.set({ author, content: quote });
    } catch (error) {
      console.log(error);
    }

    $fetchingQuote.set(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Button
      id="new-quote-button"
      color="secondary"
      className="button"
      onClick={fetchQuote}
    >
      New Quote
    </Button>
  );
}

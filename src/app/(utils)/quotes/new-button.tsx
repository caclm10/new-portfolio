"use client";

import { Button } from "@/components/shared/button";
import { useEffect } from "react";
import { $fetchedQuote, $fetchingQuote } from "./store";

// https://api.quotable.io/random
export default function NewButton() {
  async function fetchQuote() {
    $fetchingQuote.set(true);
    try {
      const url = `https://api.quotable.io/random`;

      const resp = await fetch(url);

      if (!resp.ok) throw resp;

      const { author, content } = await resp.json();

      $fetchedQuote.set({ author, content });
    } catch (error) {
      console.log(error);
    }

    $fetchingQuote.set(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Button id="new-quote-button" className="button" onClick={fetchQuote}>
      New Quote
    </Button>
  );
}

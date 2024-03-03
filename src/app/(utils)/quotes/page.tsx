import Spinner from "./spinner";
import NewButton from "./new-button";
import Quote from "./quote";
import TwitterButton from "./twitter-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote Generator - Lewin Xander Gulo",
  description: "Simple quote generator for your day",
};

export default function Quotes() {
  return (
    <div
      className="min-h-screen m-0 bg-cover relative flex justify-center items-center text-gray-900"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/caclm10/quote-generator/main/images/background.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(17,_17,_17,_0.7)]"></div>

      <div className="relative pl-4 pr-4 w-full max-w-[600px]">
        <main className="relative p-4 rounded-lg overflow-hidden shadow bg-[rgba(255,_255,_255,_0.7)]">
          <Spinner />

          <Quote />

          <div className="flex justify-between items-center">
            <TwitterButton />

            <NewButton />
          </div>
        </main>
      </div>
    </div>
  );
}

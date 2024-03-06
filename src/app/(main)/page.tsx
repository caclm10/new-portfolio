import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lewin Xander Gulo",
};

export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:space-x-5 w-full max-w-5xl items-center justify-between">
        <div className="max-w-[300px] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/web_dev_illus.png" alt="web development illustration" />
        </div>

        <h1 className="inline-flex flex-col font-medium">
          <span className="text-5xl">Hai!</span>
          <span className="mt-1 text-4xl">My name is Lewin Xander.</span>
          <span className="mt-3 inline-flex w-fit rounded-md bg-primary px-4 py-1 text-2xl font-bold text-neutral-50">
            {`I'm a web developer`}
          </span>
        </h1>
      </div>
    </main>
  );
}

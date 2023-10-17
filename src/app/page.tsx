import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lewin Xander Gulo",
};

export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center justify-between">
        <h1 className="inline-flex flex-col font-medium">
          <span className="text-5xl">Hai!</span>
          <span className="mt-1 text-4xl">My name is Lewin Xander.</span>
          <span className="mt-3 inline-flex w-fit rounded-md bg-yellow-500 px-4 py-1 text-2xl font-bold text-neutral-50">
            {`I'm a web developer`}
          </span>
        </h1>

        <div className="max-w-[300px] hidden lg:block">
          <Image
            src="/web_dev_illus.png"
            width="0"
            height="0"
            alt="web development illustration"
            sizes="100vw"
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}

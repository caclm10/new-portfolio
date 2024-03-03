import type { Metadata } from "next";
import AboutList from "@/components/about/AboutList";
import SocialList from "@/components/social/SocialList";

export const metadata: Metadata = {
  title: "Lewin Xander Gulo | Contact",
};

export default function Contact() {
  return (
    <main className="flex-grow flex items-strecth justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center">
        <div className="grid w-full max-w-6xl lg:grid-cols-[350px_1fr] lg:space-x-24 space-y-12 lg:space-y-0">
          <div className="flex flex-col items-center">
            <div className="max-w-[256px] overflow-hidden rounded-full">
              <img src="/profile.jpg" alt="profile" />
            </div>

            <h1 className="mt-4 text-3xl font-medium">Lewin Xander Gulo</h1>

            <p className="mt-2 text-center text-neutral-50">
              A person who is always passionate and likes to learn new things.
              Love doing web development work.
            </p>

            <SocialList />
          </div>

          <AboutList />
        </div>
      </div>
    </main>
  );
}

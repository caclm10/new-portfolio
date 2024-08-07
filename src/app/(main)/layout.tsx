import type { Metadata } from "next";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import Background from "@/components/background/Background";

export const metadata: Metadata = {
  description:
    "Welcome to my personal portfolio. My Name is Lewin Xander and I am a web developer with expertise in web development, mainly using the Laravel framework. Explore my work, discover my latest projects, and learn more about my web development expertise.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationBar />

      <Background>{children}</Background>
    </>
  );
}

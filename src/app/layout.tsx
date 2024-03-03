import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import Background from "@/components/background/Background";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "Welcome to my personal portfolio. My Name is Lewin Xander and I am a web developer with expertise in web development, mainly using the Laravel framework. Explore my work, discover my latest projects, and learn more about my web development expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />

        <Background>
          <Providers>{children}</Providers>
        </Background>
      </body>
    </html>
  );
}

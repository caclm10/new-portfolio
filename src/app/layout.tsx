import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import Background from "@/components/background/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Lewin Xander's portfilo",
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

        <Background>{children}</Background>
      </body>
    </html>
  );
}

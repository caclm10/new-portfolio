import clsx from "clsx";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    fallback: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
    ],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    fallback: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    ibmPlexMono.variable,
                    outfit.variable,
                    "font-mono antialiased",
                )}
            >
                {children}
            </body>
        </html>
    );
}

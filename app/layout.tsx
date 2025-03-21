import { ThemeProvider } from "@/components/theme-provider";
import clsx from "clsx";
import { Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
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
        <html lang="en" suppressHydrationWarning>
            <body
                className={clsx(
                    firaCode.variable,
                    outfit.variable,
                    "bg-body text-on-body font-mono antialiased",
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

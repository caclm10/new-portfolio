"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/button";
import { useEffect, useState } from "react";

function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder with the same dimensions to avoid layout shift
        return <div className="size-9" />;
    }

    function toggleTheme() {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));
    }

    return (
        <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
        >
            <span className="sr-only">Theme</span>

            <span className="relative size-full">
                <motion.span
                    initial={{ scale: theme === "dark" ? 0 : 1, rotate: 0 }}
                    animate={{
                        scale: theme === "dark" ? 0 : 1,
                        rotate: theme === "dark" ? -180 : 0,
                        opacity: theme === "dark" ? 0 : 1,
                    }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <SunIcon className="h-5 w-5" />
                </motion.span>

                <motion.span
                    initial={{
                        scale: theme === "light" ? 0 : 1,
                        rotate: 0,
                    }}
                    animate={{
                        scale: theme === "light" ? 0 : 1,
                        rotate: theme === "light" ? 180 : 0,
                        opacity: theme === "light" ? 0 : 1,
                    }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <MoonIcon className="h-5 w-5" />
                </motion.span>
            </span>
        </Button>
    );
}

export { ThemeButton };

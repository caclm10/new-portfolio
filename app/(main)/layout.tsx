import type { Metadata } from "next";

const metadata: Metadata = {
    title: {
        template: "%s - Lewin Xander Gulo",
        absolute: "Lewin Xander Gulo",
    },
    description:
        "Welcome to my personal portfolio. My Name is Lewin Xander and I am a web developer with expertise in web development, mainly using the Laravel framework. Explore my work, discover my latest projects, and learn more about my web development expertise.",
};

function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="min-h-dvh px-4 py-8">
            <div className="container">{children}</div>
        </div>
    );
}

export { metadata };

export default MainLayout;

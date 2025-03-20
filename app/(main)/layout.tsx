import type { Metadata } from "next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

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
            <div className="container">
                <div className="flex flex-col gap-8" data-slot="header">
                    <div className="flex flex-col gap-5" data-slot="profile">
                        <Avatar className="size-15">
                            <AvatarImage
                                src="https://github.com/caclm10.png"
                                alt="Lewin Xander"
                            />
                            <AvatarFallback>LX</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-1.5">
                            <h1 className="font-sans text-xl font-semibold">
                                Lewin Xander
                            </h1>
                            <h2 className="text-on-muted">
                                Junior Web Developer
                            </h2>
                        </div>
                    </div>
                </div>

                <main>{children}</main>
            </div>
        </div>
    );
}

export { metadata };

export default MainLayout;

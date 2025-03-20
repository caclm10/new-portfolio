import { CopyrightIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { TabNav, TabNavLink, TabNavList } from "@/components/tab-nav";
import { ContactButton } from "@/features/portfolio/components";

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
            <div className="container flex flex-col gap-12">
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

                    <div
                        className="flex items-center gap-9"
                        data-slot="contacts"
                    >
                        <ContactButton
                            url="https://github.com/caclm10"
                            label="caclm10"
                            alt="Github"
                            icon={GithubIcon}
                        />
                        <ContactButton
                            url="https://linkedin.com/in/lewinxander"
                            label="lewinxander"
                            alt="Linkedin"
                            icon={LinkedinIcon}
                        />
                        <ContactButton
                            url="https://instagram.com/lewin.xander"
                            label="lewin.xander"
                            alt="Instagram"
                            icon={InstagramIcon}
                        />
                        <ContactButton
                            url="mailto:lewinxander@gmail.com"
                            label="lewinxander@gmail.com"
                            alt="E-mail address"
                            icon={MailIcon}
                        />
                    </div>
                </div>

                <div className="h-px border"></div>

                <TabNav>
                    <TabNavList>
                        <TabNavLink href="/">About</TabNavLink>
                        <TabNavLink href="/skills">Skills</TabNavLink>
                        <TabNavLink href="/projects">Projects</TabNavLink>
                    </TabNavList>
                </TabNav>

                <main className="flex flex-col gap-11">{children}</main>

                <div
                    className="flex items-center justify-center gap-2.5 pt-10 text-center"
                    data-slot="footer"
                >
                    <div className="flex items-center gap-4">
                        <CopyrightIcon className="size-5" />
                        <p>2025 - Lewin Xander</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { metadata };

export default MainLayout;

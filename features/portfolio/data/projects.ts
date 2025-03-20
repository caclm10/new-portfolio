import { GlobeIcon } from "lucide-react";

import { GithubIcon } from "@/components/icons";

interface ProjectLink {
    url: string;
    label: string;
    alt: string;
    icon: React.ComponentType;
}

export interface Project {
    title: string;
    description: string;
    about: string;
    links: ProjectLink[];
    modal?: {
        title?: string;
        description?: string;
    };
}

const mainProjects: Project[] = [
    {
        title: "SIRS Eria",
        description: "Online student report card web app",
        about: "Sistem Informasi Raport Siswa is a web application built using the Laravel framework and the MySQL database management system. The application is designed to aid in the management of student report data for Eria Private High School (Internship).",
        links: [
            {
                icon: GithubIcon,
                url: "https://github.com/caclm10/sirs",
                label: "SIRS Repository",
                alt: "Github",
            },
        ],
        modal: {
            title: "Sistem Informasi Raport Siswa (SIRS) Eria",
        },
    },
    {
        title: "BersamaHidup",
        description: "Online donation and fundraising web application",
        about: "BersamaHidup is a web application created for educational purposes as part of a university project. It is built using the Laravel framework, utilizes the MySQL database, and integrates with the Tripay payment gateway to facilitate online donations and fundraising.",
        links: [
            {
                icon: GithubIcon,
                url: "https://github.com/caclm10/bersamahidup-web",
                label: "BersamaHidup Repository",
                alt: "Github",
            },
            {
                icon: GlobeIcon,
                url: "https://bersamahidup.lewinxander.com",
                label: "BersamaHidup Live Web",
                alt: "Web",
            },
        ],
    },
];

const miniProjects: Project[] = [
    {
        title: "Seah Bimbingan",
        description: "Personal guidance notes app.",
        about: `Seah Bimbingan is a simple personal guidance notes application that allows you to record important details of your guidance sessions with your advisor, including the type of guidance (e.g., "Skripsi," "PKL," etc.). This application includes features such as recording your advisor's name, guidance topics, date of the session, and additional notes. The app is built using React and Chakra UI and is hosted online, so there's no need for manual installation.`,
        links: [
            {
                icon: GithubIcon,
                url: "https://github.com/caclm10/seah-bimbingan",
                label: "Seah Bimbingan Repository",
                alt: "Github",
            },
            {
                icon: GlobeIcon,
                url: "https://seah-bimbingan.vercel.app",
                label: "Seah Bimbingan Live Web",
                alt: "Web",
            },
        ],
    },
    {
        title: "Matcha Latte",
        description: "Make a matcha latte",
        about: `Just a simple tutorial to make an Iced Matcha Latte. Built using Astro.`,
        links: [
            {
                icon: GithubIcon,
                url: "https://github.com/caclm10/matcha-latte",
                label: "Matcha Latte Repository",
                alt: "Github",
            },
            {
                icon: GlobeIcon,
                url: "https://caclm10.github.io/matcha-latte",
                label: "Matcha Latte Live Web",
                alt: "Web",
            },
        ],
    },
    {
        title: "Tic tac toe",
        description: "Classic tic tac toe game",
        about: `Simple implementation of the classic game Tic Tac Toe. The game is built using HTML, CSS and JavaScript.`,
        links: [
            {
                icon: GithubIcon,
                url: "https://github.com/caclm10/tic-tac-toe",
                label: "Tic tac toe Repository",
                alt: "Github",
            },
            {
                icon: GlobeIcon,
                url: "https://caclm10.github.io/tic-tac-toe",
                label: "Tic tac toe Live Web",
                alt: "Web",
            },
        ],
    },
];

const highlightedProjects: Project[] = [
    mainProjects[0],
    mainProjects[1],
    miniProjects[0],
];

export { highlightedProjects, mainProjects, miniProjects };

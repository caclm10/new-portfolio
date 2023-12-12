export interface AboutDetail {
    id: string
    title: string
    year: string
    subtitles: string[]
    descriptions: string[]
}

interface Abouts {
    id: string
    title: string
    details: AboutDetail[]
}

export const ABOUTS: Abouts[] = [
    {
        id: "education",
        title: "Education",
        details: [
            {
                id: "undip",
                title: "Diponegoro University",
                year: "2019 - 2023",
                subtitles: [
                    "Semarang, Indonesia",
                ],
                descriptions: [
                    "Bachelor Degree in Computer Science",
                    "Grade 3.65 of 4.00 (Cumlaude)"
                ],
            },
            {
                id: 'sutomo',
                title: 'SMA Swasta Sutomo 1',
                year: "2016 - 2019",
                subtitles: [
                    "Medan, Indonesia"
                ],
                descriptions: [
                    "Enrolled in Mathematics and Natural Sciences Track"
                ]
            }
        ],
    },
    {
        id: "experience",
        title: "Experience",
        details: [
            {
                id: "kkn-negeri-lama",
                title: "Kelurahan Negeri Lama",
                year: "2022",
                subtitles: ["Community Service Program"],
                descriptions: [
                    "Introducing information and computer technology to elementary school students.",
                    "Creating and providing pocket books on the introduction of website development and web-based application."
                ]
            },
            {
                id: "pkl-eria",
                title: "SMA Swasta Eria Medan",
                year: "2022",
                subtitles: ["Web Development (Internship)"],
                descriptions: ["Responsible and play a key role in building web-based application of student report card information systems."]
            }
        ],
    },
];
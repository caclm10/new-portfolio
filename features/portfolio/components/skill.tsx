"use client";

import {
    JavascriptIcon,
    MysqlIcon,
    PhpIcon,
    ReactIcon,
    SqliteIcon,
    TailwindcssIcon,
    TypescriptIcon,
} from "@/components/icons";
import {
    FeaturesItem,
    FeaturesList,
} from "@/features/portfolio/components/features";

function SkillList() {
    return (
        <FeaturesList>
            <FeaturesItem
                title="Javascript"
                description="One of my most-used languages, primarily used for modern frontend development."
                icon={JavascriptIcon}
            />
            <FeaturesItem
                title="Typescript"
                description="Preferred over Javascript for its type safety and scalability."
                icon={TypescriptIcon}
            />

            <FeaturesItem
                title="PHP"
                description="One of my most-used languages, mainly for backend and web application development."
                icon={PhpIcon}
            />

            <FeaturesItem
                title="TailwindCSS"
                description="My go-to CSS framework for styling, enabling fast and responsive UI development."
                icon={TailwindcssIcon}
            />

            <FeaturesItem
                title="React"
                description="My go-to library for modern frontend development, ensuring fast and interactive UIs."
                icon={ReactIcon}
            />

            <FeaturesItem
                title="MySQL"
                description="My primary database when building applications that require a database"
                icon={MysqlIcon}
            />

            <FeaturesItem
                title="SQLite"
                description="Recently used SQLite for some lightweight applications, handling structured data efficiently."
                icon={SqliteIcon}
            />
        </FeaturesList>
    );
}

export { SkillList };

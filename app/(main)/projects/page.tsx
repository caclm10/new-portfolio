import { Features, FeaturesTitle } from "@/features/portfolio/components";
import { ProjectList } from "@/features/portfolio/components/project";
import { mainProjects, miniProjects } from "@/features/portfolio/data/projects";

function ProjectsPage() {
    return (
        <div className="flex flex-col gap-16">
            <Features>
                <FeaturesTitle>Main Projects</FeaturesTitle>

                <ProjectList items={mainProjects} />
            </Features>

            <Features>
                <FeaturesTitle>Mini Projects</FeaturesTitle>

                <ProjectList items={miniProjects} />
            </Features>
        </div>
    );
}

export default ProjectsPage;

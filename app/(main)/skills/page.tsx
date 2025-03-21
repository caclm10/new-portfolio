import { Section } from "@/components/section";
import { Features, SkillList } from "@/features/portfolio/components";

function SkillsPage() {
    return (
        <Section id="skills">
            <Features>
                <SkillList />
            </Features>
        </Section>
    );
}

export default SkillsPage;

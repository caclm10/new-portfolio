import PageHeader from "@/components/page/PageHeader";
import SkillList from "@/components/skill/SkillList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lewin Xander Gulo | Skills",
};

export default function Skills() {
  return (
    <main className="flex-grow flex items-start justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center">
        <PageHeader
          title="Development Skills"
          subtitle="languages & frameworks"
          rootClassName="mb-8"
        />

        <SkillList />
      </div>
    </main>
  );
}

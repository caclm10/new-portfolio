import Icon from "@/components/icon/Icon";
import PageHeader from "@/components/page/PageHeader";
import WorkList from "@/components/work/WorkList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lewin Xander Gulo | Works",
};

export default function Works() {
  return (
    <main className="flex-grow flex lg:items-start justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center">
        <PageHeader
          title="Development Works"
          subtitle="latest & recent projects"
          rootClassName="mb-8"
        />

        <WorkList />
      </div>
    </main>
  );
}

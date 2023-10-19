import { cn } from "@/lib";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  rootClassName?: string;
}

const PageHeader = ({
  title,
  subtitle,
  rootClassName = "",
}: PageHeaderProps) => {
  return (
    <div className={cn("flex justify-center", rootClassName)}>
      <div className="flex flex-col items-end">
        <h2 className="mb-2 text-4xl md:text-5xl font-semibold tracking-wide">
          {title}
        </h2>
        <h3 className="font-medium text-yellow-500">{subtitle}</h3>
      </div>
    </div>
  );
};

export default PageHeader;

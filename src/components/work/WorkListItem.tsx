import WorkListItemLink from "./WorkListItemLink";

interface WorkListItemProps {
  src: string;
  alt: string;
  name: string;
  href: string;
}

const WorkListItem = ({ src, alt, name, href }: WorkListItemProps) => {
  return (
    <>
      <div className="w-full max-w-[780px] rounded-lg overflow-hidden">
        <img src={src} alt={alt} />
      </div>

      <WorkListItemLink name={name} href={href} />
    </>
  );
};

export default WorkListItem;

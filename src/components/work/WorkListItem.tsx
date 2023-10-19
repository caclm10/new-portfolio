import WorkListItemImageWrapper from "./WorkListItemImageWrapper";
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
      <WorkListItemImageWrapper>
        <img src={src} alt={alt} />
      </WorkListItemImageWrapper>

      <WorkListItemLink name={name} href={href} />
    </>
  );
};

export default WorkListItem;

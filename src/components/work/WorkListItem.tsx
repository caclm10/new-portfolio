import Image from "next/image";
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
        <Image
          src={src}
          alt={alt}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      <WorkListItemLink name={name} href={href} />
    </>
  );
};

export default WorkListItem;

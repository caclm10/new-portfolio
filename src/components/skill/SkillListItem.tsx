import Image from "next/image";

interface SkillListItemProps {
  src: string;
  alt: string;
  description: React.ReactNode;
}

const SkillListItem = ({ src, alt, description }: SkillListItemProps) => {
  return (
    <div className="flex items-start space-x-10">
      <div className="mt-1.5 max-w-[50px]">
        <Image
          src={src}
          width={0}
          height={0}
          alt={alt}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="flex-grow border-b-2 border-b-yellow-500 pb-7">
        {description}
      </div>
    </div>
  );
};

export default SkillListItem;

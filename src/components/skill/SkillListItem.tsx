interface SkillListItemProps {
  src: string;
  alt: string;
  description: React.ReactNode;
}

const SkillListItem = ({ src, alt, description }: SkillListItemProps) => {
  return (
    <div className="grid grid-cols-[50px_1fr] space-x-7 lg:space-x-10">
      <div className="mt-1.5">
        <img src={src} alt={alt} />
      </div>

      <div className="flex-grow border-b-2 border-b-yellow-500 pb-7">
        {description}
      </div>
    </div>
  );
};

export default SkillListItem;

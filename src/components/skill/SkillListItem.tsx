interface SkillListItemProps {
  src: string;
  alt: string;
  description: React.ReactNode;
}

const SkillListItem = ({ src, alt, description }: SkillListItemProps) => {
  return (
    <div className="flex items-start space-x-10">
      <div className="mt-1.5 w-full max-w-[50px]">
        <img src={src} alt={alt} />
      </div>

      <div className="flex-grow border-b-2 border-b-yellow-500 pb-7">
        {description}
      </div>
    </div>
  );
};

export default SkillListItem;

interface SkillListItemNameProps {
  text: string;
}

const SkillListItemName = ({ text }: SkillListItemNameProps) => {
  return <span className="font-semibold text-yellow-500">{text}</span>;
};

export default SkillListItemName;

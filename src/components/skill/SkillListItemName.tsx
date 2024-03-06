interface SkillListItemNameProps {
  text: string;
}

const SkillListItemName = ({ text }: SkillListItemNameProps) => {
  return <span className="font-semibold text-primary">{text}</span>;
};

export default SkillListItemName;

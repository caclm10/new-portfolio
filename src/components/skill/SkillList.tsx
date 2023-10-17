import SkillListItem from "./SkillListItem";
import { SKILLS } from "./skill-config";

const SkillList = () => {
  return (
    <div className="flex flex-col space-y-12">
      {SKILLS.map(({ id, ...rest }) => (
        <SkillListItem key={id} {...{ ...rest }} />
      ))}
    </div>
  );
};

export default SkillList;

import SocialListItem from "./SocialListItem";
import { SOCIALS } from "./social-config";

const SocialList = () => {
  return (
    <div className="flex items-center justify-center space-x-8 mt-5">
      {SOCIALS.map(({ id, ...rest }) => (
        <SocialListItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default SocialList;

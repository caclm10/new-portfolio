import AboutListItem from "./AboutListItem";
import AboutListItemDetailList from "./AboutListItemDetailList";
import { ABOUTS } from "./about-config";

const AboutList = () => {
  return (
    <div className="space-y-10">
      {ABOUTS.map(({ id, ...rest }) => (
        <AboutListItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default AboutList;

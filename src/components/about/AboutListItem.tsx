import AboutListItemDetailList from "./AboutListItemDetailList";
import AboutListItemTitle from "./AboutListItemTitle";
import { AboutDetail } from "./about-config";

interface AboutListItemProps {
  title: string;
  details: AboutDetail[];
}

const AboutListItem = ({ title, details }: AboutListItemProps) => {
  return (
    <div>
      <AboutListItemTitle text={title} />

      {details.map(({ id, ...rest }) => (
        <AboutListItemDetailList key={id} {...rest} />
      ))}
    </div>
  );
};

export default AboutListItem;

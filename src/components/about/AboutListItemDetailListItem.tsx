import AboutListItemDetailListItemDisc from "./AboutListItemDetailListItemDisc";
import AboutListItemDetailListItemHeader from "./AboutListItemDetailListItemHeader";

interface AboutListItemDetailListItemProps {
  title: string;
  year: string;
  subtitles?: string[];
  descriptions?: string[];
}

const AboutListItemDetailListItem = ({
  title,
  year,
  subtitles = [],
  descriptions = [],
}: AboutListItemDetailListItemProps) => {
  return (
    <div className="flex items-start space-x-2.5">
      <AboutListItemDetailListItemDisc />

      <div className="w-full">
        <AboutListItemDetailListItemHeader title={title} year={year} />
        <div className="mb-1">
          {subtitles.map((subtitle) => (
            <p key={subtitle} className="font-semibold">
              {subtitle}
            </p>
          ))}
        </div>

        {descriptions.map((description) => (
          <p key={description} className="text-sm">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutListItemDetailListItem;

import AboutListItemDetailListItem from "./AboutListItemDetailListItem";

interface AboutListItemDetailListProps {
  title: string;
  year: string;
  subtitles?: string[];
  descriptions?: string[];
}

const AboutListItemDetailList = ({
  title,
  year,
  subtitles = [],
  descriptions = [],
}: AboutListItemDetailListProps) => {
  return (
    <div className="px-3 py-2">
      <AboutListItemDetailListItem
        title={title}
        year={year}
        subtitles={subtitles}
        descriptions={descriptions}
      />
    </div>
  );
};

export default AboutListItemDetailList;

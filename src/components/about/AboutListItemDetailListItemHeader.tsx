interface AboutListItemDetailListItemHeaderProps {
  title: string;
  year: string;
}

const AboutListItemDetailListItemHeader = ({
  title,
  year,
}: AboutListItemDetailListItemHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-primary">{title}</h3>
      <span className="text-sm">{year}</span>
    </div>
  );
};

export default AboutListItemDetailListItemHeader;

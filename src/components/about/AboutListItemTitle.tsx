interface AboutListItemTitleProps {
  text: string;
}

const AboutListItemTitle = ({ text }: AboutListItemTitleProps) => {
  return (
    <h2 className="border-b-2 border-b-neutral-100 pb-1 text-2xl font-medium">
      {text}
    </h2>
  );
};

export default AboutListItemTitle;

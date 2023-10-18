import IndexBackgroundAnimation from "./IndexBackgroundAnimation";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="flex min-h-screen justify-center bg-neutral-800 px-5 pt-10 pb-24 text-neutral-100">
      <IndexBackgroundAnimation />

      <div className="flex-grow flex flex-col relative z-40">{children}</div>
    </div>
  );
};

export default Background;

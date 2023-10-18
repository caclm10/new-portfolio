import CodeIcon from "../icon/CodeIcon";
import GoLangIcon from "../icon/GoLangIcon";
import LaravelIcon from "../icon/LaravelIcon";
import MySQLIcon from "../icon/MySQLIcon";
import ReactIcon from "../icon/ReactIcon";

const IndexBackgroundAnimation = () => {
  return (
    <div className="fixed inset-y-0 inset-x-0 opacity-10">
      <span className="absolute -left-[50%] top-[70%] -translate-y-[70%] animate-[flying_10s_linear_1s_infinite]">
        <CodeIcon className="h-28 w-28" />
      </span>
      <span className="absolute -left-[50%] top-[30%] -translate-y-[30%] animate-[flying_13s_linear_2s_infinite]">
        <LaravelIcon className="h-28 w-28" />
      </span>
      <span className="absolute -left-[50%] top-[50%] -translate-y-[50%] animate-[flying_18s_linear_3s_infinite]">
        <ReactIcon className="h-28 w-28" />
      </span>
      <span className="absolute -left-[50%] top-[10%] -translate-y-[10%] animate-[flying_11s_linear_infinite]">
        <GoLangIcon className="h-28 w-28" />
      </span>
      <span className="absolute -left-[50%] top-[90%] -translate-y-[90%] animate-[flying_15s_linear_4s_infinite]">
        <MySQLIcon className="h-28 w-28" />
      </span>
    </div>
  );
};

export default IndexBackgroundAnimation;

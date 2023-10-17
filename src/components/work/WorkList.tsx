import { WORKS } from "./work-config";
import SplideSlide from "../splide/SplideSlide";
import WorkListItem from "./WorkListItem";
import WorkSplide from "./WorkSplide";

const WorkList = () => {
  return (
    <div className="flex-grow flex items-center justify-center lg:items-start">
      <div className="relative min-w-0 max-w-[780px] rounded-lg overflow-hidden group">
        <WorkSplide>
          {WORKS.map(({ id, ...rest }) => (
            <SplideSlide key={id}>
              <WorkListItem {...rest} />
            </SplideSlide>
          ))}
        </WorkSplide>
      </div>
    </div>
  );
};

export default WorkList;

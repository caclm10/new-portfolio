import NavigationBarMenuItem from "./NavigationBarMenuItem";
import { NAVIGATION_MENUS } from "./navigation-config";

const NavigationBarMenu = () => {
  return (
    <div className="flex items-center space-x-10 rounded-xl border-[3px] border-neutral-100 px-6 py-2">
      {NAVIGATION_MENUS.map(({ id, ...rest }) => (
        <NavigationBarMenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default NavigationBarMenu;

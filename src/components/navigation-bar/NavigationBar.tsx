import NavigationBarMenu from "./NavigationBarMenu";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-5 left-[50%] -translate-x-[50%] rounded-xl bg-neutral-800 text-neutral-100 z-50">
      <NavigationBarMenu />
    </div>
  );
};

export default NavigationBar;

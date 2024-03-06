import NavigationBarMenu from "./NavigationBarMenu";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-5 left-[50%] -translate-x-[50%] rounded-xl bg-secondary-950 text-primary-100 z-50">
      <NavigationBarMenu />
    </div>
  );
};

export default NavigationBar;

import Logo from "@/components/Logo";
import MenuButton from "@/components/ui/more-button";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-[64px] p-5 relative z-20">
      <div></div>
      <div>
        <Logo />
      </div>
      <div className="sm:hidden ">
        <MenuButton />
      </div>
    </div>
  );
};

export default Header;

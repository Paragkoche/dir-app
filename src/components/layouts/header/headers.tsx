import Logo from "../../branding/logo";
import LaptopMenu from "./laptop.menu";
import MobileMenu from "./mobile.menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-8  xl:px-[150px] border-b border-[rgba(0,0,0,0.1)] max-h-[67px]">
      <div>
        <Logo />
      </div>
      <LaptopMenu />
      <MobileMenu />
    </header>
  );
};

export default Header;

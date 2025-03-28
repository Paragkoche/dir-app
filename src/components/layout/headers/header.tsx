import Logo from "@/components/Logo";
import Menu, { ButtonMenu } from "@/components/ui/menu";
import MenuButton from "@/components/ui/more-button";
import { SSRcreateClient } from "@/lib/db-connection";

const Header = async () => {
  const { data, error } = await (await SSRcreateClient())
    .from("category")
    .select("name,slug")
    .order("name");
  console.log(data, error);

  return (
    <header className="border-b border-b-[rgba(0,0,0,.1)] z-20 max-h-16 uppercase py-4 relative px-3.5 sm:py-4">
      <div className="flex justify-between items-center    max-w-[1336px] mx-auto ">
        <div className="hidden sm:block">
          <nav className="flex gap-9">
            <Menu data={data} />
          </nav>
        </div>
        <div>
          <Logo />
        </div>
        <div className="sm:hidden ">
          <MenuButton data={data} />
        </div>
        <div className="hidden sm:flex gap-3 ">
          <ButtonMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

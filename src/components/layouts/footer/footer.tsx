import Logo from "@/components/branding/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="flex justify-center items-center p-9">
        <Logo className="text-white" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-5 px-8 xl:px-[150px] text-[rgba(225,225,225,0.5)] border-t border-t-[rgba(225,225,225,0.1)]">
        <div>
          &copy; 2025-{new Date().getFullYear()} TheGreat4u.com. All right
          reserved.
        </div>
        <div>
          Designed and developed by{" "}
          <Link
            className="hover:text-[#F3C31C]"
            href={"https://www.webstack.in"}
            target="__blank"
          >
            Webstack
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

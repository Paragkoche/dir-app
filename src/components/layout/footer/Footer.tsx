import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white">
      <div className="py-6 flex justify-center items-center border-b border-[rgba(225,225,255,.15)]">
        <Logo />
      </div>

      <div className="py-5 px-2.5 text-[#999] text-center flex gap-2.5 flex-col sm:flex-row justify-between leading-[150%]">
        <div>
          © 2025 - {new Date().getFullYear()} Grate4u. All rights reserved.
        </div>
        <div>
          Designed and Developed by{" "}
          <Link
            className="hover:text-[var(--primary)]"
            target="__blank"
            href={"https://www.webstack.in"}
          >
            Webstack & team
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

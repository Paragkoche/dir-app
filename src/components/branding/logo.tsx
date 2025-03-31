import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = (props: React.ComponentProps<"a">) => {
  return (
    <Link
      href="/"
      className={cn(
        "hover:text-primary font-[500] cursor-pointer",
        props.className
      )}
      {...props}
    >
      TheGreat4u.com
    </Link>
  );
};

export default Logo;

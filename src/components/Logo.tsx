"use client";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="cursor-pointer hover:text-[var(--primary)] transition-colors"
    >
      Great4U.com
    </div>
  );
};

export default Logo;

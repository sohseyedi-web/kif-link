"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ to, title }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to}>
      <li
        className={`${
          isActive
            ? "bg-gray-50 dark:bg-gray-800 dark:border-slate-900 border text-orange-500 font-semibold"
            : "bg-transparent border-none text-inherit font-medium"
        } p-2 rounded-2xl cursor-pointer w-full`}
      >
        {title}
      </li>
    </Link>
  );
};

export default CustomLink;

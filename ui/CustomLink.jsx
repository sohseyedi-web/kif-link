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
            ? "bg-gray-50 dark:bg-slate-900 dark:border-slate-900 border text-orange-500 font-semibold"
            : "bg-transparent border-none text-inherit font-medium"
        } p-2 rounded-lg cursor-pointer w-[105px] text-center`}
      >
        {title}
      </li>
    </Link>
  );
};

export default CustomLink;

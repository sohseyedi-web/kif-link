"use client";
import CustomLink from "@/ui/CustomLink";
import Link from "next/link";
import { BiWallet } from "react-icons/bi";
import ThemeSwitch from "./ThemeSwitch";
import * as RiIcon from "react-icons/ri";
import LoadingUi from "@/ui/LoadingUi";
import { signOut, useSession } from "next-auth/react";
import { Suspense } from "react";

const HeaderDashboard = () => {
  const { data: session } = useSession();

  return (
    <header className="lg:border border-b dark:border-slate-900 lg:rounded-2xl rounded-none shadow-sm lg:py-2 lg:px-4 p-3 w-full flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Link href={"/"}>
          <BiWallet size={30} className="text-orange-600" />
        </Link>
        <ul className="lg:flex items-center gap-x-3 hidden">
          <CustomLink to={"/"} title={"صفحه اصلی"} />
          <CustomLink to={"/viewer"} title={"آمار بازدید"} />
          <CustomLink to={"/support"} title={"پشتیبانی"} />
        </ul>
      </div>
      <div className="flex items-center gap-x-2">
        <Suspense fallback={<LoadingUi />}>
          <img
            className="rounded-full w-12 h-12 lg:inline-block hidden"
            src={session?.user.image}
            alt={session?.user.name}
          />
        </Suspense>
        <RiIcon.RiFingerprintLine className="cursor-pointer lg:hidden flex w-9 h-9" />
        <button
          onClick={() => signOut()}
          className="flex items-center justify-center transition-all duration-300 lg:w-12 w-9 lg:h-12 h-9 rounded-full hover:bg-red-500 hover:text-white border border-red-500 text-red-500"
        >
          <RiIcon.RiShutDownLine size={22} />
        </button>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default HeaderDashboard;

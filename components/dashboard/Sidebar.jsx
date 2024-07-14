"use client";
import CustomLink from "@/ui/CustomLink";
import * as RiIcon from "react-icons/ri";
import ThemeSwitch from "./ThemeSwitch";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import LoadingUi from "@/ui/LoadingUi";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <aside className="w-[25%] border dark:border-slate-900 rounded-2xl shadow-sm p-3 space-y-6">
      <div className="py-3 flex items-center justify-center flex-col">
        <Suspense fallback={<LoadingUi />}>
          <img
            className="rounded-full w-20 h-20"
            src={session?.user.image}
            alt={session?.user.name}
          />
          <h3 className="text-orange-500 font-semibold text-xl mt-2">
            {session?.user.name}
          </h3>
        </Suspense>
      </div>
      <ul className="flex flex-col gap-y-2">
        <CustomLink to={"/"} title={"صفحه اصلی"} />
        <CustomLink to={"/viewer"} title={"آمار بازدید"} />
        <CustomLink to={"/support"} title={"پشتیبانی"} />
      </ul>
      <div className="flex items-center justify-between">
        <button className="flex items-center text-lg justify-center transition-all duration-300 gap-x-2 w-[48%] rounded-2xl hover:bg-red-500 hover:text-white h-[40px] border border-red-500 text-red-500">
          <RiIcon.RiShutDownLine size={24} />
          خروج
        </button>
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;

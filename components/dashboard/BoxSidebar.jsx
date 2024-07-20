import React from "react";

const BoxSidebar = ({ icon, title }) => {
  return (
    <li className="cursor-pointer flex border transition-all duration-300 hover:dark:bg-slate-900 hover:bg-gray-50 dark:border-slate-900 dark:text-orange-500 items-center justify-center shadow h-[65px] w-full rounded-xl font-semibold gap-x-2">
      {icon}
      {title}
    </li>
  );
};

export default BoxSidebar;

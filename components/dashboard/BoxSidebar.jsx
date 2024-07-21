import { cn } from "@/utils/cn";

const BoxSidebar = ({ icon, title, className = "" }) => {
  return (
    <li
      className={cn(
        `cursor-pointer flex border transition-all duration-300 hover:dark:bg-slate-900 hover:bg-gray-50 dark:border-slate-900 dark:text-orange-500 items-center justify-center shadow lg:h-[65px] lg:text-base text-[13px] h-auto py-3 lg:w-full w-[48%] rounded-xl font-semibold gap-x-2`,
        className
      )}
    >
      {icon}
      {title}
    </li>
  );
};

export default BoxSidebar;

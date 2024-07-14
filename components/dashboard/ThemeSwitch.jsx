"use client";
import { useThemeStore } from "@/zustand/theme";
import { useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center text-lg justify-center transition-all duration-300 gap-x-2 w-[48%] rounded-2xl hover:bg-slate-500 hover:text-white h-[40px] dark:text-white dark:border-slate-900 hover:dark:bg-slate-700 border border-slate-400 text-slate-400"
    >
      {theme === "light" ? (
        <>
          <RiMoonLine size={24} />
          تاریک
        </>
      ) : (
        <>
          <RiSunLine size={24} />
          روشن
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;

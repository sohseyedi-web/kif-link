"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center transition-all duration-300 lg:w-12 w-9 lg:h-12 h-9 rounded-full hover:bg-slate-500 hover:text-white dark:text-white dark:border-white hover:dark:bg-slate-700 border border-slate-400 text-slate-400"
    >
      {theme === "light" ? <RiMoonLine size={24} /> : <RiSunLine size={24} />}
    </button>
  );
};

export default ThemeSwitch;

"use client";
import { signIn } from "next-auth/react";
import * as RiIcon from "react-icons/ri";

const FormGroup = () => {
  return (
    <form className="flex my-2 justify-between items-center lg:flex-row flex-col gap-y-2">
      <BtnLogin
        title={"ورود با گوگل"}
        icon={<RiIcon.RiGoogleLine size={26} />}
        onSignIn={() => signIn("google")}
      />
      <BtnLogin
        title={"ورود با گیت هاب"}
        icon={<RiIcon.RiGithubLine size={26} />}
        onSignIn={() => signIn("github")}
      />
    </form>
  );
};

export default FormGroup;

const BtnLogin = ({ icon, title, onSignIn }) => {
  return (
    <button
      type="button"
      onClick={onSignIn}
      className="md:text-lg lg:w-[48%] w-full text-base shadow flex items-center font-semibold dark:border-slate-900 border gap-x-2 justify-center py-3 rounded-2xl hover:bg-gray-50 transition-all duration-300"
    >
      {title}
      {icon}
    </button>
  );
};

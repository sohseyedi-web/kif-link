"use client";
import { signIn, useSession } from "next-auth/react";
import * as RiIcon from "react-icons/ri";

const FormGroup = () => {
  const { data: session } = useSession();


  return (
    <form className="space-y-4 flex flex-col">
      {session ? (
        JSON.stringify(session)
      ) : (
        <>
          <BtnLogin
            title={"ورود با گوگل"}
            icon={<RiIcon.RiGoogleLine size={28} />}
            onSignIn={() => signIn("google")}
          />
          <BtnLogin
            title={"ورود با گیت هاب"}
            icon={<RiIcon.RiGithubLine size={28} />}
            onSignIn={() => signIn("github")}
          />
        </>
      )}
    </form>
  );
};

export default FormGroup;

const BtnLogin = ({ icon, title, onSignIn }) => {
  return (
    <button
      type="button"
      onClick={onSignIn}
      className="text-lg shadow flex items-center font-semibold border gap-x-2 w-full justify-center py-3 rounded-3xl hover:scale-105 scale-100 transition-all duration-300"
    >
      {title}
      {icon}
    </button>
  );
};

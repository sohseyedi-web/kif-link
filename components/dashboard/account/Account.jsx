import Link from "next/link";
import { RiAttachmentLine } from "react-icons/ri";
import PalletBox from "./PalletBox";

const Account = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-x-1 lg:text-lg">
        <RiAttachmentLine className="lg:w-7 lg:h-7 w-5 h-5" />
        نمایش صفحه شما
      </Link>
      <hr className="my-3 dark:border-slate-900" />
      <div className="mb-3">
        <label htmlFor="link" className="block mb-3 lg:text-lg">
          لینک شخصی شما :
        </label>
        <input
          type="text"
          id="link"
          name="link"
          dir="ltr"
          className="input input-bordered w-full focus:bg-white bg-gray-100 dark:bg-slate-600 dark:focus:bg-slate-950 lg:h-[45px] h-[40px] transition-all duration-300 outline-none"
        />
      </div>
      <PalletBox />
    </>
  );
};

export default Account;

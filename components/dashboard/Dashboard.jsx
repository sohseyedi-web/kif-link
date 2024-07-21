import Link from "next/link";
import BoxSidebar from "./BoxSidebar";
import * as RiIcon from "react-icons/ri";

const Dashboard = () => {
  return (
    <section className="p-3  flex lg:flex-row flex-col gap-x-3">
      <ul className="lg:w-[20%] w-full flex items-center lg:border-l-2 lg:pl-4 lg:gap-0 gap-y-4 lg:mb-0 mb-3 justify-between lg:flex-col flow-row flex-wrap">
        <BoxSidebar
          icon={<RiIcon.RiEyeLine className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"مشاهده حساب"}
        />
        <BoxSidebar
          icon={<RiIcon.RiAddLine className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"افزودن لینک"}
        />
        <BoxSidebar
          icon={<RiIcon.RiSettings4Line className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"تنظیمات"}
        />
        <BoxSidebar
          icon={<RiIcon.RiNotification3Line className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"اعلان ها"}
        />
      </ul>
      <div className="flex-1 py-3">
        <Link href={"/"} className="flex items-center gap-x-1 lg:text-lg">
          <RiIcon.RiAttachmentLine className="lg:w-7 lg:h-7 w-5 h-5" />
          نمایش صفحه شما
        </Link>
        <hr className="my-3 dark:border-slate-900"/>
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
        <div>
          <label className="block mb-3 lg:text-lg">
            انتخاب پالت :
          </label>
          <div className="w-full p-3 my-3 h-[70px] rounded-xl border dark:border-slate-900">
            s
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

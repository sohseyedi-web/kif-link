import Link from "next/link";
import BoxSidebar from "./BoxSidebar";
import * as RiIcon from "react-icons/ri";

const Dashboard = () => {
  return (
    <section className="p-3 flex gap-x-3">
      <ul className="w-[20%] pl-4 space-y-3 p-2 border-l-2 dark:border-slate-900 flex flex-col">
        <BoxSidebar
          icon={<RiIcon.RiEyeLine size={26} />}
          title={"مشاهده حساب"}
        />
        <BoxSidebar
          icon={<RiIcon.RiAddLine size={26} />}
          title={"افزودن لینک"}
        />
        <BoxSidebar
          icon={<RiIcon.RiSettings4Line size={26} />}
          title={"تنظیمات"}
        />
        <BoxSidebar
          icon={<RiIcon.RiNotification3Line size={26} />}
          title={"اعلان ها"}
        />
      </ul>
      <div className="flex-1 py-3">
        <Link href={"/"} className="flex items-center gap-x-1 text-lg">
          <RiIcon.RiAttachmentLine size={26} />
          نمایش صفحه شما
        </Link>
        <hr className="my-3 dark:border-slate-900"/>
        <div className="mb-3">
          <label htmlFor="link" className="block mb-3 text-lg">
            لینک شخصی شما :
          </label>
          <input
            type="text"
            id="link"
            name="link"
            dir="ltr"
            className="input input-bordered w-full focus:bg-white bg-gray-100 dark:bg-slate-600 dark:focus:bg-slate-950 h-[45px] transition-all duration-300 outline-none"
          />
        </div>
        <div>
          <label className="block mb-3 text-lg">
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

"use client";
import BoxSidebar from "./BoxSidebar";
import * as RiIcon from "react-icons/ri";
import { useState } from "react";
import Account from "./account/Account";
import Setting from "./settings/Setting";
import AddLinkBox from "./addLink/AddLinkBox";
import Notification from "./notification/Notification";

const Dashboard = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="p-3  flex lg:flex-row flex-col gap-x-3">
      <ul className="lg:w-[20%] lg:space-y-4 lg:justify-start justify-between w-full flex items-center lg:border-l-2 lg:pl-4 lg:gap-0 gap-y-4 lg:mb-0 mb-3 lg:flex-col flow-row flex-wrap">
        <BoxSidebar
          onClick={() => setActive(1)}
          icon={<RiIcon.RiEyeLine className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"مشاهده حساب"}
          className={active == 1 ? "bg-gray-100 dark:bg-slate-700" : "bg-transparent"}
        />
        <BoxSidebar
          onClick={() => setActive(2)}
          icon={<RiIcon.RiAddLine className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"افزودن لینک"}
          className={active == 2 ? "bg-gray-100 dark:bg-slate-700" : "bg-transparent"}

        />
        <BoxSidebar
          onClick={() => setActive(3)}
          icon={<RiIcon.RiSettings4Line className="lg:w-7 lg:h-7 w-5 h-5" />}
          title={"تنظیمات"}
          className={active == 3 ? "bg-gray-100 dark:bg-slate-700" : "bg-transparent"}

        />
        <BoxSidebar
          onClick={() => setActive(4)}
          icon={
            <RiIcon.RiNotification3Line className="lg:w-7 lg:h-7 w-5 h-5" />
          }
          title={"اعلان ها"}
          className={active == 4 ? "bg-gray-100 dark:bg-slate-700" : "bg-transparent"}

        />
      </ul>
      <div className="flex-1 py-3">
        {active == 1 && <Account />}
        {active == 2 && <AddLinkBox />}
        {active == 3 && <Setting />}
        {active == 4 && <Notification />}
      </div>
    </section>
  );
};

export default Dashboard;

import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Link from "next/link";
import { RiDeleteBinLine,RiArrowLeftLine } from "react-icons/ri";

const SupportBox = () => {
  return (
    <div className="md:w-[47%] lg:w-[32%] bg-zinc-50 dark:bg-zinc-900 dark:border-slate-900 w-full h-[130px] md:mx-0 mx-auto border rounded-2xl py-2 px-4">
      <div className="flex items-center justify-between py-1">
        <h4 className="text-lg font-semibold">سهیل سیدی</h4>
        <Link href={"/"}><RiArrowLeftLine size={26} className="text-blue-600 cursor-pointer"/> </Link>
      </div>
      <hr className="dark:border-slate-900"/>
      <div className="my-3">
        <span className="font-semibold">تاریخ ثبت :</span>
        <span>1401/5/6</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="w-[290px] truncate font-medium">
          من یک برنماه نوسسیشناشسنمتیمشسنتیشتیم
        </p>
        <div className="flex items-center gap-x-1">
          <RiDeleteBinLine size={26} className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SupportBox;

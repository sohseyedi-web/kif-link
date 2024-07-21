import SupportBox from "@/components/support/SupportBox";
import LoadingUi from "@/ui/LoadingUi";
import { Suspense } from "react";

export default function Support() {
  const isValid = true;

  return (
    <section className="border p-3 dark:border-slate-900 rounded-2xl shadow-sm lg:w-full w-[95%] lg:mx-0 mx-auto">
      {!isValid ? (
        <div className="flex items-center justify-center flex-col h-[300px]">
          <h6 className="text-lg font-semibold mb-3">
            هیچ درخواست پشتیبانی ثبت نشده
          </h6>
          <button className="bg-blue-500 w-[200px] text-lg text-white rounded-2xl shadow-sm h-[45px]">
            ثبت درخواست
          </button>
        </div>
      ) : (
        <Suspense fallback={<LoadingUi />}>
          <header className="flex items-center justify-between">
            <h6 className="lg:text-lg text-base font-semibold">لیست درخواست ها</h6>
          </header>
          <hr className="my-3 dark:border-slate-900"/>
          <div className="flex items-center gap-3 flex-wrap">
          <SupportBox/>
          <SupportBox/>
          <SupportBox/>
          <SupportBox/>
          <SupportBox/>
          </div>
        </Suspense>
      )}
    </section>
  );
}

import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
      <section className="border dark:border-slate-900 rounded-2xl shadow-sm lg:w-full w-[95%] lg:mx-0 mx-auto">
        <Dashboard/>
      </section>
  );
}
import ViewerData from "@/components/viewer/ViewerData";
import ViewerHeader from "@/components/viewer/ViewerHeader";

export default function Viewer() {
    return (
      <section className="border dark:border-slate-900 rounded-2xl shadow-sm lg:w-full w-[95%] lg:mx-0 mx-auto">
        <ViewerHeader/>
        <ViewerData/>
      </section>
    );
  }
import { BiWallet } from "react-icons/bi";
import FormGroup from "./FormGroup";

const AuthContainer = () => {
  return (
    <section className="flex items-center justify-center h-svh">
      <div className="lg:w-[40%] md:w-[75%] w-[90%] shadow-xl rounded-3xl dark:border-slate-900 border p-4">
        <div className="flex items-center justify-center gap-x-2  text-orange-600">
          <h2 className="text-3xl font-semibold">کیف لینک</h2>
          <BiWallet size={38} />
        </div>
        <p className="text-slate-700 my-6 w-full text-center font-medium">
          یک لینک - یک جهان
        </p>
        <FormGroup />
      </div>
    </section>
  );
};

export default AuthContainer;

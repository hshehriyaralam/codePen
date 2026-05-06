import { handleLogin } from "@/lib/helper/loginHandler";
import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

const LoginForms = ({ inputStyling, navigateForm }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { handleSubmit, reset, register } = useForm();
  const emailId = useId();
  const passId = useId();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const email = data?.email;
      const password = data?.password;
      await handleLogin({ email, password, reset, router,toast });
    } catch (error) {
      console.log("Invalid Email and password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6  flex flex-col items-center justify-center gap-4 ">
      <div className="p-4">
        <h2 className="text-white font-quicksand text-3xl ">Login your account</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col  gap-6 w-[80%]"
      >
        <div className="flex flex-col  gap-1">
          <label
            htmlFor={emailId}
            className="text-white font-quicksand font-normal  text-sm  "
          >
            Enter Your email
          </label>
          <input
            id={emailId}
            required
            {...register("email", { required: true })}
            type="email"
            className={inputStyling}
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col  gap-1">
          <label
            htmlFor={passId}
            className="text-white font-quicksand font-normal  text-sm  "
          >
            Enter Your passwrord
          </label>
          <input
            id={passId}
            {...register("password", { required: true })}
            type="password"
            required
            className={inputStyling}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center text-xl text-white
            cursor-pointer  flex items-center justify-center
              rounded-md py-2  font-quicksand  bg-[#ff291a]/70  hover:bg-[#ff291a]/50  "
          >
            {loading ? <Spinner className="h-6 w-6 " /> : "Login"}
          </button>
          <p className="text-white font-quicksand text-xs  text-center  my-3">
            Don't have an account?
            <button
              type="button"
              onClick={navigateForm}
              className="text-xs text-sm text-[#ff291a] hover:underline cursor-pointer
             font-semibold  mx-1"
            >
              SignUp
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default React.memo(LoginForms);

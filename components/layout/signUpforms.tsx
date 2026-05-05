import loading from "@/app/loading";
import { handleSignUp } from "@/lib/helper/signUpHandler";
import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../ui/spinner";

const SignUpForms = ({ inputStyling, navigateForm }: any) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const passId = useId();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    await handleSignUp({ name, email, password, reset, navigateForm });
    setLoading(false);
  };

  return (
    <div className="p-6  flex flex-col items-center justify-center gap-4 ">
      <div className="p-4">
        <h2 className="text-white font-mono text-2xl ">create your account</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col  gap-6 w-[80%]"
      >
        <div className="flex flex-col  gap-1 ">
          <label
            htmlFor={nameId}
            className="text-white font-mono font-normal  text-sm  "
          >
            Enter Your Name
          </label>
          <input
            id={nameId}
            type="text"
            required
            {...register("name", { required: true })}
            className={inputStyling}
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col  gap-1 ">
          <label
            htmlFor={emailId}
            className="text-white font-mono font-normal  text-sm  "
          >
            Enter Your email
          </label>
          <input
            type="email"
            id={emailId}
            required
            {...register("email", { required: true })}
            className={inputStyling}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col  gap-1">
          <label
            htmlFor={passId}
            className="text-white font-mono font-normal  text-sm  "
          >
            Enter Your passwrord
          </label>
          <input
            id={passId}
            type="password"
            required
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
            })}
            className={inputStyling}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-rose-500 text-sm">Password must be 8 characters</span>
          )}
        </div>
        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center text-xl text-white
            cursor-pointer  flex items-center justify-center 
            bg-[#0f2027]  rounded-md py-2  font-mono  hover:bg-[#0f2027]/80  "
          >
            {loading ? <Spinner className="h-6 w-6 " /> : "SignUp"}
          </button>
          <p className="text-white font-mono text-xs  text-center  my-3">
            Already have an account?
            <button
              type="button"
              onClick={navigateForm}
              className="text-xs text-sm text-teal-600 hover:underline cursor-pointer
             font-semibold  mx-1"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SignUpForms);

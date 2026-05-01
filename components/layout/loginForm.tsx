import { handleLogin } from "@/lib/helper/loginHandler";
import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../ui/spinner";

const LoginForms = ({ inputStyling, navigateForm }: any) => {
  const [loading, setLoading] = useState(false)
   const router = useRouter()
   const {
     handleSubmit,
     reset,
     register
   }  = useForm()
   const emailId = useId()
   const passId = useId()

   const onSubmit = async (data : any) => {
    setLoading(true)
    const email = data?.email
    const password = data?.password
    await handleLogin({email, password, reset, router})
    setLoading(false)
   }
  return (
    <div className="p-6  flex flex-col items-center justify-center gap-4 ">
      <div className="p-4">
        <h2 className="text-white font-mono text-2xl ">login your account</h2>
      </div>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 flex flex-col  gap-6 w-[80%]">
        <div className="flex flex-col  gap-1">
          <label 
          htmlFor={emailId}
          className="text-white font-mono font-normal  text-sm  ">
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
          className="text-white font-mono font-normal  text-sm  ">
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
            bg-teal-500  rounded-md py-2  font-mono  hover:bg-teal-600 "
          >
              {loading ? <Spinner  className="h-6 w-6 " />  :  'Login' } 
          </button>
          <p className="text-white font-mono text-xs  text-center  my-3">
            Don't have an account?
            <button
              type="button"
              onClick={navigateForm}
              className="text-xs text-sm text-teal-600 hover:underline cursor-pointer
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

export default React.memo(LoginForms)

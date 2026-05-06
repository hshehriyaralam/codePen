"use client";
import LoginForms from "@/components/layout/loginForm";
import SignUpForms from "@/components/layout/signUpforms";
import { useCallback, useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigateForm = useCallback(() => {
    setIsLogin((prev) => !prev);
  }, []);

  const inputStyling = `rounded-md   bg-[#0f111e]  text-white text-sm outline-none   px-6 py-3  font-quicksand  focus:border    `;
  return (
    <section className="w-full min-h-screen bg-black/95     flex items-center justify-center  font-quicksand   ">
      <div className="w-[75%]  min-h-[500px] bg-black/90  border border-gray-800   not-only:not-only-of-type: grid lg:grid-cols-2  grid-cols-1  rounded-3xl   ">
        <div
          className="hidden lg:flex w-full  bg-[#ff291a]/40   p-6
         flex-col  justify-center  items-center  rounded-2xl "
        >
          <h2 className="font-bold text-white font-quicksand text-3xl   ">CodeJS</h2>
          <p className="font-semibold text-white font-quicksand text-sm ">
            {" "}
           Build, Test and Preview your code in realtime
          </p>
        </div>
        {/* Forms */}
        {isLogin ? (
          <LoginForms inputStyling={inputStyling} navigateForm={navigateForm} />
        ) : (
          <SignUpForms
            inputStyling={inputStyling}
            navigateForm={navigateForm}
          />
        )}
      </div>
    </section>
  );
};

export default Auth;

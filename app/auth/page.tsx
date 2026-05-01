"use client";
import LoginForms from "@/components/layout/loginForm";
import SignUpForms from "@/components/layout/signUpforms";
import { useCallback, useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigateForm = useCallback(() => {
    setIsLogin((prev) => !prev);
  }, []);

  const inputStyling = `rounded-md   bg-[#0f111e]  text-white text-sm outline-none   px-6 py-3  font-mono  focus:border   focus:border-teal-500 `;
  return (
    <section className="w-full min-h-screen bg-[#0f1117] flex items-center justify-center  font-mono   ">
      <div className="w-[75%]  min-h-[500px] bg-[#1e1e1e] grid lg:grid-cols-2  grid-cols-1  ">
        <div
          className="hidden lg:flex w-full bg-gradient-to-b from-cyan-500 to-teal-500  p-6
         flex-col  justify-center"
        >
          <h2 className="font-bold text-white font-mono text-4xl ">CodeJS</h2>
          <p className="font-semibold text-white font-mono text-md ">
            {" "}
            Live Preview for your Code
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

'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";
import { SignOut } from "@/hooks/signOutHandler";
import Link from "next/link";

const Header = ({ handleSaveProject, saveLoading, heading, isIdMatch}: any) => {
  const [loading,setLoading]  = useState(false)
  const router = useRouter();
  const handleSignOut = async () => {
      await SignOut({setLoading, router})
  };
  

  return (
    <div
      className="flex  flex-col gap-4 
         lg:gap-0  lg:flex-row  lg:items-center lg:justify-between  p-2  "
    >
      <Link href={'/'}
       className="mx-3 my-3">
        <h1 className="text-4xl  font-quicksand font-bold  text-white    font-mono ">
          {heading}
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-2 ">
        {isIdMatch && (
          <button
          disabled={saveLoading}
          onClick={handleSaveProject}
          className="w-38 h-9 flex items-center justify-center px-3.5 py-1  text-md rounded-xl text-white 
          cursor-pointer border border-gray-700   bg-[#0f2023] font-bold     font-mono "
        >
          {saveLoading ? <Spinner  className="w-6 h-6" /> : 'Save Project'}
        </button>
          )
        }
    
        <button
          disabled={loading}
          onClick={handleSignOut}
          className="w-24 h-9 px-3.5 py-1 flex items-center justify-center  text-md rounded-xl text-white 
          cursor-pointer border border-gray-700   bg-[#0f2023] font-bold     font-mono  "
        >
          {loading ? <Spinner  className="w-5 h-5" /> : 'SignOut'}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);

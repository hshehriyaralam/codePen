'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";
import { SignOut } from "@/hooks/signOutHandler";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = ({ handleSaveProject, saveLoading, heading, isIdMatch}: any) => {
  const [loading,setLoading]  = useState(false)
  const router = useRouter();
  const handleSignOut = async () => {
      await SignOut({setLoading, router})
  };
  

  return (
    <div
      className="flex  flex-col gap-4 my-2
         lg:gap-0  lg:flex-row  lg:items-center lg:justify-between  p-2  "
    >
      <Link href={'/'}
         className="  ">
       <Button  className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-400  cursor-pointer 
          text-black font-semibold px-5  rounded-lg">
        Go Back
       </Button>
      </Link>

       <h1 className="text-3xl  font-quicksand font-bold  text-white  text-center   font-mono ">
          {heading}
        </h1>
      <div className="flex items-center justify-center gap-2 ">
        {isIdMatch && (
          <Button
          disabled={saveLoading}
          onClick={handleSaveProject}
          className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-400  cursor-pointer 
          text-black font-semibold px-5  rounded-lg h-8 w-35 flex items-center justify-center"
        >
          
          {saveLoading ? <Spinner  className="w-6 h-6" /> : 'Save Project'  }
        </Button>
          )
        }
    
        <Button
          disabled={loading}
          onClick={handleSignOut}
          className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-400  cursor-pointer 
          text-black font-semibold px-5  rounded-lg h-8 w-26 "
        >
          {loading ? <Spinner  className="w-5 h-5" /> : 'SignOut'}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Header);

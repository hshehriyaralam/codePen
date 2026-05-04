"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";
import TitleModal from "./titleModal";
import { createProject } from "@/app/actions/create.project";
import { SignOut } from "@/hooks/signOutHandler";

const HomeHeader = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSignOut = async () => {
     await SignOut({setLoading, router})
  };

  const handleCreateProject =  async (e: any) => {
    e.preventDefault();
    try{
      setLoading(true)
      const res = await createProject({title})
      if(res?.success){
      router.push(`/project/${res?.projectId}`)    
    }
    // setLoading(false)
    // setTitle("");
    // setShowModal(false);
    }catch(error:unknown){
      if(error instanceof  Error ){
        console.log("Create Project Error", error)
      }
    }
  };

  return (
    <div>
      <div
        className="flex  flex-col gap-4 
         lg:gap-0  lg:flex-row  lg:items-center lg:justify-between  p-2  "
      >
        <div className="mx-3">
          <h1 className="text-4xl  font-quicksand font-bold  text-teal-600     font-mono ">
            CodeJS
          </h1>
          <p className="text-white font-mono  text-sm">
            {" "}
            Live Preview for HTML, CSS and JavaScript
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <button
            onClick={() => setShowModal(true)}
            className="py-1.5 px-3.5 py-1  text-md rounded-xl text-white 
          cursor-pointer bg-teal-500  font-bold  hover:bg-teal-600   font-mono  "
          >
            Create Project
          </button>
          <button
            disabled={loading}
            onClick={handleSignOut}
            className="w-24 h-9 px-3.5 py-1 flex items-center justify-center  text-md rounded-xl text-white 
          cursor-pointer bg-teal-500  hover:bg-teal-600  font-bold  font-mono  "
          >
            {loading ? <Spinner className="w-5 h-5" /> : "SignOut"}
          </button>
        </div>
      </div>

      {showModal && (
        <TitleModal
          handleCreateProject={handleCreateProject}
          title={title}
          setTitle={setTitle}
          loading={loading}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default React.memo(HomeHeader);

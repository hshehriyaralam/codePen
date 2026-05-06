"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";
import TitleModal from "./titleModal";
import { createProject } from "@/app/actions/create.project";
import { SignOut } from "@/hooks/signOutHandler";
import { Button } from "../ui/button";

const HomeHeader = () => {
  ``;
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<any>("");
  const [isPublic, setIsPublic] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    await SignOut({ setLoading, router });
  };

  const handleCreateProject = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await createProject({ title, isPublic });
      if (res?.success) {
        router.push(`/project/${res?.projectId}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Create Project Error", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-6 px-4 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-teal-400">CodeJS</h1>
          <p className="text-gray-300 text-sm mt-1">
            Build & Share HTML, CSS & JS Projects
          </p>
        </div>

        <div  className="flex items-center justify-center gap-2"> 
        <Button
          onClick={() => setShowModal(true)}
          className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-400  cursor-pointer  text-black font-semibold px-5 py-2 rounded-lg"
          >
          + New Project
        </Button>

        <Button
          disabled={loading}
          onClick={handleSignOut}
          className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-400  cursor-pointer 
          text-black font-semibold px-5  rounded-lg h-8  w-26"
          >
            
          {loading ? <Spinner className="w-5 h-5" /> :  "SignOut "}
        </Button>
          </div>
      </div>

      {showModal && (
        <TitleModal
          handleCreateProject={handleCreateProject}
          title={title}
          setTitle={setTitle}
          loading={loading}
          setShowModal={setShowModal}
          setIsPublic={setIsPublic}
          isPublic={isPublic}
        />
      )}
    </div>
  );
};

export default React.memo(HomeHeader);

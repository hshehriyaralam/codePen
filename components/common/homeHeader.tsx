"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TitleModal from "./titleModal";
import { createProject } from "@/app/actions/create.project";
import { SignOut } from "@/hooks/signOutHandler";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/7083932.png";
import Link from "next/link";
import ProfileDropDown from "./profileDropdown";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";

const HomeHeader = () => {
  const [userData, setUserData] = useState<any>({});
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

  const navigatation = () => {
    router.push("/profile");
    router.refresh();
  };

  const getUserProfile = async () => {
    const supabase = getSupabaseBrowserClient();
    const { data: user } = await supabase.auth.getUser();
    const userName = user?.user?.user_metadata?.name;
    const userEmail = user?.user?.email;
    setUserData({ userName, userEmail });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between py-4  max-w-full  lg:mx-6  mx-2  font-quicksand">
        {/* Logo and Title */}

        <div  className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              alt="logo"
              src={logo}
              width={50}
              height={50}
              className="text-white "
            />
            <h2 className="text-white  font-bold text-4xl">CodeJs</h2>
          </Link>

            <div  className="block lg:hidden">
            <ProfileDropDown
              userName={userData?.userName}
              userEmail={userData?.userEmail}
              navigatation={navigatation}
              handleSignOut={handleSignOut}
            />
          </div>

        </div>

        {/* Profile and Button  */}
        <div className="flex     lg:flex-row  items-center justify-center gap-2">
          <Button
            onClick={() => setShowModal(true)}
            className="mt-4 lg:mt-0 bg-[#ff291a]  hover:bg-[#ff291a]/70   cursor-pointer  text-white font-semibold px-5 py-3 rounded-lg  h-9   font-quicksand  "
          >
            New Project
          </Button>
          <div  className="hidden lg:block">
            <ProfileDropDown
              userName={userData?.userName}
              userEmail={userData?.userEmail}
              navigatation={navigatation}
              handleSignOut={handleSignOut}
            />
          </div>
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

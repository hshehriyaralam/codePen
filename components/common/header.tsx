"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";
import { SignOut } from "@/hooks/signOutHandler";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/7083932.png";
import ProfileDropDown from "./profileDropdown";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";

const Header = ({
  handleSaveProject,
  saveLoading,
  heading,
  isIdMatch,
}: any) => {
  const [userData, setUserData] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    await SignOut({ setLoading, router });
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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between py-4  mx-6  max-w-full  font-quicksand">
        <div>
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
        </div>

        <h2 className="text-3xl  font-quicksand font-bold  text-white  text-center">
          {heading}
        </h2>

        <div className="flex items-center justify-center gap-2">
          {isIdMatch && (
            <Button
              onClick={handleSaveProject}
              className="mt-4 lg:mt-0 bg-[#ff291a]  hover:bg-[#ff291a]/70   cursor-pointer  text-white font-semibold px-5 py-3 rounded-lg  h-9   font-quicksand  "
            >
              {saveLoading ? <Spinner className="w-6 h-6" /> : "Save Project"}
            </Button>
          )}

          <div>
            <ProfileDropDown
              userName={userData?.userName}
              userEmail={userData?.userEmail}
              navigatation={navigatation}
              handleSignOut={handleSignOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);

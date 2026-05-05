"use client";
import React from "react";
const Navbar = ({ response, setResponse }: any) => {
  const links = [
    {
      id: 1,
      text: "Your Work",
    },
    {
      id: 2,
      text: "Public",
    },
    {
      id: 3,
      text: "All",
    },
  ];

  return (
    <div className="p-1">
      <div className="w-[264px] bg-black   mx-5  cursor-pointer  rounded">
        <div className="flex itmes-center  ">
          {links?.map((link: any) => {
            const isActive = response == link.text;
            return (
              <div
                onClick={() => setResponse(link.text)}
                key={link.id}
                className={` text-white font-semibold font-mono 
             p-2  curosor-pointer hover:border-b
             hover:bg-[#0f111e]/40  text-xl
             ${isActive ? "bg-[#0f111e]/70 border-b  " : ""}`}>
                <h2 className="  curosor-pointer">{link.text}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);

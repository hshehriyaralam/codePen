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
 <div className="flex justify-center mt-6">
  <div className="flex bg-black  p-1 rounded-xl border border-gray-500">
    {links.map((link: any) => {
      const isActive = response === link.text;

      return (
        <button
          key={link.id}
          onClick={() => setResponse(link.text)}
          className={`px-5 py-2 rounded-lg text-sm  cursor-pointer  font-semibold transition-all
          ${
            isActive
              ? "bg-teal-500 text-black shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {link.text}
        </button>
      );
    })}
  </div>
</div> 
  );
};

export default React.memo(Navbar);

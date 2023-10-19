import React, { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useClickAway } from "react-use";
import { signIn, signOut, useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";
import { Button } from "../ui/button";

function AccountDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { data, status } = useSession();
  const ref = useRef(null);
  useClickAway(ref, () => {
    setDropdownOpen(false);
  });
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  if (status === "authenticated") {
    return (
      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <Avatar>
              <AvatarImage src={data?.user?.image || undefined} />
              <AvatarFallback>
                {getInitials(data?.user?.name || "Diwanshu Midha")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        {isDropdownOpen && (
          <div
            ref={ref}
            className="absolute top-12 right-0 mt-2 pb-3 z-50  bg-white border rounded-lg shadow-md shadow-slate-700"
          >
            <p className=" text-black block px-4 py-2 ">{data?.user?.email}</p>
            <a
              href=""
              className="block px-4 py-2 cursor-not-allowed text-gray-800 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href=""
              className="block px-4 py-2 cursor-not-allowed text-gray-800 hover:bg-gray-100"
            >
              Profile
            </a>
            <button
              onClick={() => {
                signOut();
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return <Button onClick={() => signIn()}>Sign In</Button>;
  }
}

export default AccountDropdown;

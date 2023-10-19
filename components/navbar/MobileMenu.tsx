import React, { useState } from "react";

import { NavLink } from "./Navlink";
import { LogOut, Menu, X } from "lucide-react";
import { routes } from "@/lib/Constants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const [opened, setopen] = useState(false);
  const { data: user, status } = useSession();
  return (
    <>
      <div onClick={() => setopen(true)}>
        <Menu size={30} className=" cursor-pointer hover:text-primary" />
      </div>

      <div
        className={` w-full h-[100dvh] px-5 py-5 flex flex-col fixed bg-background ease-in transition-all duration-300 left-0 top-0 z-50 ${
          opened ? "unmasked" : "masked"
        }`}
      >
        <div className=" ml-auto" onClick={() => setopen(false)}>
          {" "}
          <X size={30} className=" cursor-pointer hover:text-primary" />{" "}
        </div>
        <div className="mt-9 h-full flex-col flex justify-between">
          <ul className=" w-full grow ">
            {routes.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}
                >
                  <NavLink
                    className=" hover:text-foreground text-2xl nav-link relative py-1"
                    activeClassName=" text-foreground"
                    href={item.path}
                    onClick={() => {
                      setopen(false);
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className=" pb-5">
            <li className=" flex items-center flex-wrap justify-between gap-2">
              {status === "authenticated" ? (
                <div className=" flex gap-4">
                  <Avatar>
                    <AvatarImage src={user.user?.image || undefined} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{user.user?.name}</p>
                    <span className=" text-[15px] text-gray-400">
                      {user.user?.email}
                    </span>
                  </div>
                </div>
              ) : (
                <Button onClick={() => signIn()}>Sign In</Button>
              )}
              {status === "authenticated" ? (
                <Button onClick={() => signOut()} variant={"outline"}>
                  <LogOut />
                </Button>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

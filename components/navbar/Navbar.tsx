"use client";
import Link from "next/link";
import React from "react";
import { NavLink } from "./Navlink";

import MobileMenu from "./MobileMenu";
import { GITHUB_Link, routes } from "@/lib/Constants";
import { Github } from "lucide-react";
import AccountDropdown from "./Dropdown";

const Name = "Notate";
function Navbar() {
  return (
    <nav className="flex h-[80px] items-center justify-between mx-auto max-w-[1400px] px-5 md:px-14">
      <ul>
        <li className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="font-semibold text-primary text-2xl flex items-center">
              {Name}
            </span>
          </Link>
        </li>
      </ul>

      <ul className="flex items-center space-x-10 max-md:!hidden">
        {routes.map((item, index) => {
          return (
            <li key={index} className={`list-none text-gray-500`}>
              <NavLink
                className=" hover:text-foreground nav-link relative py-1"
                activeClassName=" text-foreground"
                href={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
        <li className={`list-none text-gray-500`}>
          <a
            className=" hover:text-foreground  cursor-pointer relative py-1"
            href={"https://diwanshumidha.vercel.app/"}
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li className=" flex items-center gap-2">
          <a href={GITHUB_Link} target="_blank">
            <Github className="hover:text-primary" />
            <span className=" sr-only">Source Code</span>
          </a>
        </li>
        <li className=" flex items-center gap-2">
          <AccountDropdown />
        </li>
      </ul>
      <ul className="md:hidden">
        <MobileMenu />
      </ul>
    </nav>
  );
}

export default Navbar;

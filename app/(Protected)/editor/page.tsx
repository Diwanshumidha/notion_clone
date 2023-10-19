import { CreateDialog } from "@/components/Dialog";
import Dropdown from "@/components/Dropdown";

import { prisma } from "@/prisma/prisma";

import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const page = async () => {
  const User = await getServerSession();
  const Editors = await prisma.editor.findMany({
    where: {
      user: { email: User?.user?.email },
    },
  });

  return (
    <main className="max-w-7xl py-3 pt-7  mx-auto px-6">
      <h1 className=" text-3xl mb-4">My Notes</h1>
      {Editors.length <= 0 ? (
        <div className=" w-full  pt-14 flex flex-col justify-center items-center">
          <p className=" text-2xl  mb-5   text-gray-300">
            No Note Yet Create One
          </p>
          <CreateDialog />
        </div>
      ) : (
        ""
      )}
      {Editors.length > 0 ? (
        <div className=" mt-4 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 ld:grid-cols-4 gap-6">
          <CreateDialog />
          {Editors.map((item) => (
            <div
              key={item.id}
              className=" flex-col gap-3  border-solid relative border-white hover:border-green-500 w-full border  transition-all duration-500  flex  items-center  h-[300px]"
            >
              <Link href={`/editor/${item.id}`} className="w-full h-[70%] ">
                <img
                  className="w-full h-full  object-cover"
                  src={
                    item.image_url
                      ? item.image_url
                      : "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D"
                  }
                ></img>
              </Link>
              <div className=" z-20 w-full p-2">
                <div className=" flex justify-between">
                  <Link href={`/editor/${item.id}`}>
                    <h2 className=" hover:underline cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <span className=" hover:text-green-300  ">
                    <Dropdown item={item} />
                  </span>
                </div>
                <p className=" text-gray-400">
                  {new Date(item.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default page;

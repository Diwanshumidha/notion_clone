import { prisma } from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import TitleInput from "./TitleInput";
import NoteEditor from "@/components/Editor";
import { notFound } from "next/navigation";
import { Images } from "@/lib/Constants";

const resolver = async (id: string) => {
  try {
    const User = await getServerSession();
    if (id.length !== 24) return notFound();
    const res = await prisma.editor.findFirst({
      where: {
        user: { email: User?.user?.email },
        id,
      },
    });
    return res;
  } catch (error) {
    return notFound();
  }
};

const page = async ({ params }: { params: { id: string } }) => {
  const Editor = await resolver(params.id);

  return (
    <div className="flex flex-col items-center-center  w-full min-h-screen ">
      <div className="group w-full h-[200px] relative">
        <img
          className=" w-full h-full object-cover select-none"
          src={Editor?.image_url || Images[0]}
        ></img>
        <div className=" group-hover:visible invisible text-black px-3 py-1 rounded-lg cursor-pointer font-semibold absolute right-10 bottom-3 bg-white">
          Customize
        </div>
      </div>
      <div className=" max-w-7xl w-full p-6 mx-auto  ">
        <TitleInput title={Editor?.title} id={Editor?.id} />
        <NoteEditor id={Editor?.id} body={Editor?.body || ""} />
      </div>
    </div>
  );
};

export default page;

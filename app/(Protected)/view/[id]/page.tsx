import { prisma } from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import React from "react";

import NoteEditor from "@/components/Editor";

const page = async ({ params }: { params: { id: string } }) => {
  const User = await getServerSession();
  const Editor = await prisma.editor.findFirst({
    where: {
      user: { email: User?.user?.email },
      id: params.id,
    },
  });
  return (
    <div className="flex flex-col items-center-center  w-full min-h-screen ">
      <div className="group w-full h-[200px] relative">
        <img
          className=" w-full h-full object-cover select-none"
          src="https://media.istockphoto.com/id/1152192908/photo/marble-purple-blue-black-neon-pattern-abstract-wavy-background-colorful-gradient-marbled.webp?b=1&s=170667a&w=0&k=20&c=EDCY9LKYo1LbAszTj80V5c_e32fOY-RGU4XKxhWlPlQ="
        ></img>
        {/* TODO:Implement Image */}
        <div className=" group-hover:visible hidden invisible text-black px-3 py-1 rounded-lg cursor-pointer font-semibold absolute right-10 bottom-3 bg-white">
          Customize
        </div>
      </div>
      <div className=" max-w-7xl w-full p-6 mx-auto  ">
        <h2 className=" pl-[50px] my-3 outline-none border-none text-4xl">
          {Editor?.title}
        </h2>
        <NoteEditor
          editable={false}
          id={Editor?.id}
          body={Editor?.body || ""}
        />
      </div>
    </div>
  );
};

export default page;

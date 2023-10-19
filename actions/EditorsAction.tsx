"use server";

import { Images } from "@/lib/Constants";
import { getRandomImage } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const CreateEditor = async (title: string) => {
  try {
    console.log(title);
    if (!title) return { message: "No Title", status: 401 };

    const User = await getServerSession();
    if (!User?.user?.email) return { message: "Not Authorised", status: 401 };

    const img = getRandomImage(Images);
    const Editor = await prisma.editor.create({
      data: {
        title,
        user: { connect: { email: User.user.email } },
        image_url: img,
      },
      select: {
        id: true,
      },
    });

    if (!Editor) return { message: "Internal Server Error", status: 500 };
    console.log(Editor);
    revalidatePath("/editor");
    return { message: "Succesfully Created", status: 200, editor_id: Editor };
  } catch (error) {
    console.error(error);
    return { message: "Internal Server Error", status: 500 };
  }
};

export const ChangeTitle = async (title: string, id: string) => {
  console.log(title, "Updating....");
  if (!title) return { message: "No Title", status: 401 };

  const User = await getServerSession();
  if (!User?.user?.email) return { message: "No Authorised", status: 401 };

  const UpdatedEditor = await prisma.editor.update({
    where: {
      id,
      user: { email: User?.user?.email },
    },
    data: {
      title,
    },
  });

  if (!UpdatedEditor) return { message: "Internal Server Error", status: 500 };
  console.log(UpdatedEditor);
  return { message: "Succesfully Created", status: 200 };
};

export const ChangeContent = async (body: string, id: string) => {
  console.log(body, "Updating....");
  if (!body) return { message: "No Title", status: 401 };

  const User = await getServerSession();
  if (!User?.user?.email) return { message: "No Authorised", status: 401 };

  const UpdatedEditor = await prisma.editor.update({
    where: {
      id,
      user: { email: User?.user?.email },
    },
    data: {
      body,
    },
  });

  if (!UpdatedEditor) return { message: "Internal Server Error", status: 500 };
  console.log(UpdatedEditor);
  return { message: "Succesfully Created", status: 200 };
};

export const DeleteEditor = async (id: string) => {
  try {
    if (!id) return { message: "No Id Found", status: 401 };

    // Auth Check
    const User = await getServerSession();
    if (!User?.user?.email) return { message: "Not Authorised", status: 401 };

    const Editor = await prisma.editor.delete({
      where: {
        id,
        user: { email: User.user.email },
      },
      select: {
        id: true,
      },
    });

    if (!Editor.id) {
      return { message: "Internal Server Error", status: 500 };
    }
    revalidatePath("/editor");
    return { message: "Succesfully Created", status: 200 };
  } catch (error) {
    console.error(error);
    return { message: "Internal Server Error", status: 500 };
  }
};

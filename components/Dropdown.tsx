"use client";
import React from "react";
import { Copy, MoreVertical, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DeleteEditor } from "@/actions/EditorsAction";
import { toast } from "sonner";

type props = {
  item: {
    id: string;
    title: string;
    body: string | null;
    isPublished: boolean;
    image_url: string | null;
    userEmail: string;
    createdAt: Date;
    updatedAt: Date;
  };
};
const Dropdown = ({ item }: props) => {
  const handleonclick = async (fn: string) => {
    switch (fn) {
      case "copy":
        navigator.clipboard.writeText(item.id);
        break;
      case "delete":
        const res = await DeleteEditor(item.id);
        if (res.status !== 200) {
          toast.error("Something gone wrong");
          console.error(res.message);
        } else {
          toast.success("Editor Successfully deleted");
        }

      default:
        break;
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="px-2">
          <MoreVertical />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleonclick("copy")}>
          {" "}
          <Copy size={16} className=" mr-2" /> Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/editor/${item.id}`}
            className="flex w-full h-full items-center"
          >
            <Pencil size={16} className=" mr-2" /> Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleonclick("delete")}
          className="bg-destructive hover:!bg-red-800"
        >
          <Trash size={16} className=" mr-2" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

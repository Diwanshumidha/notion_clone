"use client";
import { ChangeTitle } from "@/actions/EditorsAction";
import { useDebounce } from "@/lib/useDebounce";
import { useUpdateEffect } from "react-use";
import React, { useEffect, useState } from "react";

type Props = {
  title?: string;
  id?: string;
};

const TitleInput = ({ title, id }: Props) => {
  const [Title, setTitle] = useState(title);
  const DebouncedTitle = useDebounce(Title, 500);

  useUpdateEffect(() => {
    if (!id) return;
    ChangeTitle(DebouncedTitle, id);
  }, [DebouncedTitle]);

  return (
    <input
      className=" bg-transparent pl-[50px] my-3 outline-none border-none text-4xl"
      value={Title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};

export default TitleInput;

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center-center  w-full min-h-screen ">
      <div className="group w-full h-[200px] relative">
        <Skeleton className=" w-full h-full" />
      </div>
      <div className=" max-w-7xl w-full flex flex-col gap-2  p-6 mx-auto  ">
        <Skeleton className=" w-[20%] h-[30px]"></Skeleton>
        <div>
          <Skeleton className=" w-[60%] h-[30px]"></Skeleton>
          <Skeleton className=" w-[70%] h-[30px] mt-1"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default loading;

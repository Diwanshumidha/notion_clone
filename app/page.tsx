import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className=" flex flex-col gap-10 overflow-x-hidden px-4  justify-center mt-[-72px]  items-center min-h-screen">
      <h1 className=" text-5xl  text-center relative ">
        <div className=" absolute w-[300px] aspect-square gradient rounded-full blur-[100px] opacity-90 top-[-100%] -z-10 left-1/2  "></div>
        Embark on a Journey
        <br className=" max-md:hidden" /> of Idea Elegance with our{" "}
        <span className=" text-white ">Notate</span> App!
      </h1>
      <Link
        className={buttonVariants({ variant: "default", class: "gap-2" })}
        href={"/editor"}
      >
        Get Started <ArrowRight />
      </Link>
    </main>
  );
}

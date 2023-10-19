"use client";
import { CreateEditor } from "@/actions/EditorsAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export function CreateDialog() {
  const [Title, setTitle] = useState("");
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    toast.loading("Creating.....", { id: "loading" });
    const res = await CreateEditor(Title);
    setisLoading(false);
    toast.dismiss("loading");
    if (res.status !== 200) {
      return toast.error("Something Went Wrong!!!", {
        style: { background: "red", borderColor: "red", color: "white" },
      });
    } else {
      console.log(res.editor_id);
      toast.success("Succesfully Created");
      router.replace(`/editor/${res.editor_id?.id}`);
    }

    setisDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={(e) => setisDialogOpen(e)}>
      <DialogTrigger asChild>
        <div className=" border-dashed border-white hover:scale-105 hover:border-green-500 transition-all border-2 w-full flex-col flex justify-center items-center cursor-pointer h-[300px]">
          <span className=" text-lg">Create One</span>
          <p className="text-gray-400">Create a New Text File</p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Editor</DialogTitle>
          <DialogDescription>
            Fill The Input to Generate the Editor
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlesubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                required
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="reset" disabled={isLoading} variant={"destructive"}>
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={isLoading}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

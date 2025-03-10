import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightCircle, Download, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import SocialIcon from "./social-icon";
import { Button } from "./ui/button";

const Menubar = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="destructive"
            className="bg-[#9b87f5] p-1  hover:bg-primary1-light"
          >
            <Menu size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="">
            <DialogTitle className=" self-center">Reach out to me</DialogTitle>
            <DialogDescription></DialogDescription>
            <Card className="bg-[#9b87f5] p-4">
              <div className="flex justify-center items-center rounded-full text-center mx-auto  w-32 h-32">
                <Image
                  src="/work.jpg"
                  width={200}
                  height={200}
                  priority
                  alt="bg image"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col text-white justify-center items-center gap-1">
                <small className="text-2xl max-md:text-xl font-bold">
                  @ Alabere Abdulazeez Isiaq
                </small>
                <small className="text-sm text-white">
                  Alabere4real247@gmail.com
                </small>
                <small className="text-sm font-semibold">+2349044348459</small>
              </div>
            </Card>
            <div className="py-2">
              <SocialIcon />
            </div>
            {/* <Separator /> */}
            <div className=" flex flex-col gap-2 pt-4">
              <Card className="bg-neutral-200 flex-row hover:bg-neutral-100 transition-all duration-400 hover:border-green-700 flex justify-between items-center px-4 rounded-2xl cursor-pointer">
                <div className="bg-green-800 h-8 w-8 rounded-full"></div>
                <p className="text-neutral-500">Resume</p>
                <Download color="green" />
              </Card>
              <Card className="bg-neutral-200 hover:bg-neutral-100 transition-all duration-400 hover:border-blue-700 flex flex-row justify-between items-center px-4 py-2 rounded-2xl cursor-pointer">
                <div className="bg-blue-800 p-4 rounded-full"></div>
                <p className="text-neutral-500">About Me</p>
                <ArrowRightCircle color="blue" />
              </Card>
              <Card className="bg-neutral-200 hover:bg-neutral-100 transition-all duration-400 hover:border-blue-700 flex flex-row justify-between items-center px-4 py-2 rounded-2xl cursor-pointer">
                <div className="bg-blue-800 p-4 rounded-full"></div>
                <p className="text-neutral-500">Portfolio</p>
                <ArrowRightCircle color="blue" />
              </Card>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menubar;

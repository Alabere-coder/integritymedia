"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Popup = () => {
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPop(true);
    }, 50000);
  }, []);

  const handleCancel = () => {
    setPop(false);
  };
  return (
    <div
      onClick={() => handleCancel()}
      className={`fixed grid place-content-center right-0 top-0 m-auto h-full w-full bg-black/[80%] backdrop-blur-[1px] z-100 duration-200 ease-in-out ${
        pop ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="popW lg:w-[100%] w-[90%] m-auto lg:h-60 bg-neutral-200 p-6 rounded-md cursor-auto relative">
        <h1 className="text-center lg:text-xl text-lg cursor-auto text-neutral-800">{`Do you mind saying Hi?, Let's talk business.`}</h1>
        <div>
          <div
            onClick={() => handleCancel()}
            className="cursor-pointer text-[#9b87f5] bg-white hover:border-[#9b87f5] border-2 transition-all duration-300 absolute right-0 -top-14 w-10 h-10 rounded-full flex justify-center items-center"
          >
            <X className="text-[#9b87f5] font-extrabold" size={28} />
          </div>

          <div className="whatsapp flex mt-12 justify-center items-center">
            <Link
              href="https://api.whatsapp.com/send?phone=2349044348459&text=Hi%20Alabere"
              target="blank"
              rel="noopener noreferrer"
              className="block w-full h-[2.5rem] rounded-md relative "
            >
              <Button
                variant="secondary"
                className="bg-[#9b87f5] font-bold text-white hover:text-green-600 rounded-md absolute w-full h-full grid place-content-center"
              >
                WhatsApp
              </Button>
            </Link>
          </div>

          <div className="email flex mt-4 justify-center">
            <Link
              href="mailto:alabere007@gmail.com?subject=Let%20do%20something%20together&body="
              className="block w-full h-[2.5rem] rounded-md relative "
              target="blank"
            >
              <Button
                variant="secondary"
                className="bg-[#9b87f5] font-bold text-white hover:text-sky-600 rounded-md absolute w-full h-full grid place-content-center"
              >
                Email Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

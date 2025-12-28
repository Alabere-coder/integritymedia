"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const Popup = () => {
  const [pop, setPop] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPop(true)
    }, 5000)
  }, [])

  const handleCancel = () => {
    setPop(false)
  }
  return (
    <div
      onClick={() => handleCancel()}
      className={`fixed grid place-content-center right-0 top-0 m-auto h-full w-full bg-black/[80%] backdrop-blur-[1px] z-100 duration-200 ease-in-out ${
        pop ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="popW lg:w-[100%] w-[90%] m-auto lg:h-60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-md cursor-auto relative border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <h1 className="text-center lg:text-xl text-lg cursor-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-magenta-400 bg-clip-text text-transparent font-bold">{`Do you mind saying Hi?, Let's talk business.`}</h1>
        <div>
          <div
            onClick={() => handleCancel()}
            className="cursor-pointer text-cyan-400 bg-slate-800 hover:bg-slate-700 hover:border-cyan-400 border-2 border-cyan-500/50 transition-all duration-300 absolute right-0 -top-14 w-10 h-10 rounded-full flex justify-center items-center shadow-lg shadow-cyan-500/30"
          >
            <X className="text-cyan-400 font-extrabold" size={28} />
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
                className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-slate-900 hover:from-cyan-400 hover:to-blue-400 rounded-md absolute w-full h-full grid place-content-center shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300"
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
                className="bg-gradient-to-r from-purple-300 to-purple-500 font-bold text-slate-900 hover:from-magenta-400 hover:to-pink-400 rounded-md absolute w-full h-full grid place-content-center shadow-lg shadow-magenta-500/40 hover:shadow-magenta-500/60 transition-all duration-300"
              >
                Email Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup

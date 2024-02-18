import React from "react"
import { Parallax } from "react-scroll-parallax"

const Timeline: React.FC<{ Title: string, Image: any, Data: string }> = ({ Title, Image, Data }) => {


    return (
        <div>

            {/* For Desktops */}
            <div className="hidden lg:flex justify-center lg:mb-40 lg:mt-20">
                <div className="w-full h-56 border-2 border-rose-900 saturate-200 max-w-screen-lg">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-zinc-300 saturate-100 font-DECTM py-6 capitalize">{Title}</h1>
                        <Parallax className="max-w-screen-md border-2 relative border-rose-900 h-56 w-full cursor-pointer bg-[#090909] overflow-hidden" speed={10} opacity={[0.5, 2]}>
                            <img src={Image} className="absolute object-contain opacity-15 saturate-50 -bottom-1/4" alt="" />
                            <p className="top-1/2 -translate-y-1/2 px-5 text-center font-RedHatDisplay absolute text-zinc-300 text-lg">{Data}</p>
                        </Parallax>
                    </div>
                </div>
            </div>

            {/* For Mobile and Tabs */}
            <div className="w-full flex flex-col justify-center items-center lg:hidden px-8 py-4 bg-[#090909]">
                <div className="border-2 border-zinc-400 saturate-200 w-full  max-w-screen-sm overflow-hidden">
                    <div className="">
                        <h1 className="text-zinc-300 font-RedHatDisplay capitalize font-semibold text-center py-2">{Title}</h1>
                    </div>
                    <hr className="border-zinc-400 "/>
                    <div className="relative">
                        <div className="absolute w-full h-full bg-zinc-400"></div>
                        <p className="absolute px-4 py-2 top-1/2 -translate-y-1/2 text-zinc-950 font-RedHatDisplay text-center">{Data}</p>
                        <img className="opacity-10 saturate-[0.3]" src={Image}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
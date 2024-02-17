import React from "react"


const Timeline: React.FC<{Title:string, Image:any, Data:string}> = ({Title, Image, Data}) => {
    return (
        <div>
            <div className=" flex justify-center lg:mb-40 lg:mt-20">
                <div className="w-full h-80 border-2 border-rose-900 saturate-200 max-w-screen-xl">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-white font-MontrealSI py-6 uppercase">{Title}</h1>
                        <div className="max-w-screen-lg border-2 relative border-rose-900 h-80 w-full cursor-pointer bg-[#090909] overflow-hidden">
                            <img src={Image} className="absolute object-contain opacity-10 saturate-0 -bottom-1/4" alt="" />
                            <p className="p-12 text-center font-Montserrat absolute text-white text-2xl">{Data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
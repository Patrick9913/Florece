import React from "react";
import { Navbar } from "./Navbar";
import { CiImageOn } from "react-icons/ci";
export const Header: React.FC = () => {
    return (
        <header className="shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] h-screen w-screen overflow-hidden flex flex-col">
            <div className="fixed top-0 left-0 w-full bg-white z-10">
                <Navbar />
            </div>
            <div className=" flex-1 flex items-center justify-center gap-x-4 *:gap-y-4">
                <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
                <div className="flex flex-col gap-y-4">
                    <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
                    <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="w-80 h-80 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-24 h-24 text-gray-400" /></div>
                    <div className="w-80 h-80 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-24 h-24 text-gray-400" /></div>
                    <div className="w-80 h-80 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-24 h-24 text-gray-400" /></div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
                    <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
                </div>
                <div className="w-52 h-56 rounded-lg shadow flex justify-center items-center"><CiImageOn className=" w-16 h-16 text-gray-400" /></div>
            </div>
        </header>
    )
}
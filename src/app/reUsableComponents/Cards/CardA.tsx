"use client";

import Image from "next/image";
import React from "react";
import { MagicMotion } from "react-magic-motion";

interface CardAProps {
  title?: string;
  content?: string;
  bgSrc?: string;
}

export const CardA: React.FC<CardAProps> = ({ title, content, bgSrc }) => {
  return (
    <div className="relative overflow-hidden h-[450px] w-[400px] p-4 rounded flex flex-col gap-y-2 justify-center items-center shadow group">
        <Image
            alt="Card Image"
            src={bgSrc || "/default-bg.jpg"}
            fill
            className="absolute inset-0 object-cover rounded transition-all duration-300 ease-in group-hover:scale-110"
        />
        <MagicMotion>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded"></div>
            <h2 className="z-10 text-white font-semibold text-2xl">{title}</h2>
            <p className="z-10 text-gray-200">{content}</p>
            <a className="z-10 rounded bg-gradient-to-br from-orange-500 to-orange-800/20 px-6 py-3 text-white" href="#">Ver más</a>
        </MagicMotion>
    </div>
  );
};

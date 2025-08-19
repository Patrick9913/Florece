import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <h2 className=" text-lg font-bold">Logo</h2>
      <ul className=" flex gap-x-4 *:text-md *:text-gray-700 *:hover:underline *:hover:underline-offset-4">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Quienes somos</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nos Eligen</a></li>
        <li><a href="#">Cómo Comprar</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Cómo Llegar</a></li>
      </ul>
      <div className=" flex items-center gap-x-2">
        <div className=" flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-600 hover:*:text-white rounded-full">
            <IoCartSharp />
        </div>
        <div className=" flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-600 hover:*:text-white rounded-full">
            <FaUser />
        </div>
      </div>
    </nav>
  );
};
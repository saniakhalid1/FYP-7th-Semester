import React from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import Image from "next/image";
import Button from "../../Button";
import Link from "next/link";
import Input from "../../Input";


const Header = ({ handleOpen }: any) => {
  return (
    <div className="sticky top-0 z-10 bg-white flex-shrink-0 flex   px-12 py-8">
      <button
        type="button"
        className="px-4 text-themecolor bg-gray-700 focus:outline-none xl:hidden"
        onClick={() => handleOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 items-start flex justify-end">
     
            <div className="flex  sm:flex-row flex-col-reverse  gap-4 lg:gap-8  items-center justify-center">
             
              <Input placeholder="Search ..." icon="icon-search top-[50%] right-4   -translate-y-1/2" className="    lg:w-[30rem] w-[20rem]  rounded-xl"/>
              <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex justify-between items-center  gap-4">
          <div className="flex items-end flex-col">
          <p className="text-base font-bold text-[#29303A]">Manjay Gupta</p>
          <span className="text-[#B0B0B0] text-xs">Admin</span>
          </div>
             <figure className="h-14 w-14 relative ">
               <Image src="/assets/images/chat/pic1.png" layout="fill" objectFit="contain" alt=""/>
             </figure>
            
        </div>
              </div>
              
            </div>
         
        </div>
    </div>
  );
};

export default Header;

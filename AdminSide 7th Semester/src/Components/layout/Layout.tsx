import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Children, Fragment, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";

export default function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 xl:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#E5E5E5] bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full  ">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center   justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/*  mobile sidebar */}
              <div className="flex items-center justify-center bg-black1  flex-shrink-0 ">
                
                 <figure className="leading-none  px-5 mt-8 flex-shrink-0   ">
              <Image
                src="/assets/images/oneof-mint.png"
                height={120}
                width={150}
                alt=""
              />
            </figure>
              </div>
              <div className="flex-grow flex flex-col overflow-y-auto">
                <Sidebar />
                
              </div>
            </div>
          </Transition.Child>

          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>
      <div className="hidden xl:flex xl:w-[20.625rem] bg-white xl:flex-col xl:fixed md:inset-y-0">
      <figure className="leading-none  px-5 mt-5 flex-shrink-0   ">
              <Image
                src="/assets/images/oneof-mint.png"
                height={120}
                width={140}
                alt=""
              />
            </figure>
        <div className="flex flex-col flex-grow overflow-y-auto">
        
          <div className="flex-grow flex flex-col">
            <Sidebar />
            
          </div>
        </div>
      </div>

      <div className="xl:pl-[20.625rem]  flex flex-col flex-1 ">
        <Header handleOpen={setSidebarOpen} />

        <main className="bg-lightgray1 pt-12 px-8">
            {children}
        </main>
      </div>
    </>
  );
}

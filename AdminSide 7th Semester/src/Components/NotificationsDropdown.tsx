import { Fragment } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { data } from "../Components/NotificationData";
// import Button from "../Button/Button";
// import Popups from "../popup/poups";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Profiledropdown() {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [btns, showbtn] = useState(false);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left   ">
        <div>
          <Menu.Button className=" border-gray-600">
            <div className="rounded-full w-[48px] h-[48px] leading-[48px] text-center bg-white">
              {/* <img src="" alt="" /> */}
              <span className="w-full h-full text-xl text-black1">
                <i className="icon-notification"></i>
              </span>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute lg:-right-20 right-0 w-[38.75rem] rounded-lg shadow px-6 py-8 bg-white  divide-y divide-gray-100 focus:outline-none notification">
            <div className="!border-0">
              <h1 className="text-2xl font-medium mb-3 text-black">
                {" "}
                Notifications
              </h1>

              {data.map((e) => (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/">
                        <a
                          className={classNames(
                            active ? " !text-themecolor" : "!text-black2",
                            " text-base "
                          )}
                        >
                          <div className="py-4 border-b">
                            <div className="flex">
                              <figure className="w-[46px] h-[46px] relative ">
                                <Image
                                  src={e.image}
                                  layout="fill"
                                  objectFit="contain"
                                ></Image>
                              </figure>
                              <div className="relative w-full">
                                <h6 className="ml-3 text-base font-medium  text-[#46566C]">
                                  {e.name}
                                </h6>
                                <span className="text-[#757575] text-sm absolute right-0 top-0">
                                  {e.time}
                                </span>

                                <p className="ml-3 text-[#757575]">
                                  {e.message}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* {state && (
        <Popups
          show={popup}
          hide={setPopup}
          state={state}
          setstate={setState}
        />
      )} */}
    </>
  );
}

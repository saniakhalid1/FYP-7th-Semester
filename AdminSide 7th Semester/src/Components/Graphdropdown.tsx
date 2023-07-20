import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Iprops {
  icon?: string;
  title?: string;
  data: any;
}

const Graphdropdown = (props: any) => {
  return (
    <Menu as="div" className="relative  inline-block w-full text-left">
      <Menu.Button className="inline-flex justify-center w-full ">
        <div className="   py-2  flex items-center  px-5  bg-[#FFFFFF] !rounded-md ">
          <p className="text-black"> Monthly</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4"
          >
            <path
              d="M1 0.999999L7 7L13 1"
              stroke="#393A38"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-40 right-0  top-0 mt-2 sm:w-[131px] w-full  rounded-md  bg-[#1E1736] ">
          <div className="py-1">
            {props.data.map((item: any) => (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={item.link}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 "
                          : "text-gray-700 ",
                        " px-4 py-3 text-lg flex items-center "
                      )}
                    >
                      <h6 className=" font-SofiaPro-Regular text-base text-white">
                        {item.title}
                      </h6>
                    </a>
                  )}
                </Menu.Item>
              </>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Graphdropdown;

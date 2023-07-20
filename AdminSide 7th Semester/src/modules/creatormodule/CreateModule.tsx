import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/select/Select";
import { CreatorModuleData } from "./CreatorModuleData";

export const CreatorModule = () => {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [first, setfirst] = useState(false);
  const Data = [
    {
      id: 1,
      name: "All NFT’s",
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="text-3xl">Orders</h2>
      </div>

      <div className="overflow-hidden overflow-x-auto  max-w-[100%]">
        <table className="min-w-full at-tablestyle  at-tablestyle2">
          <thead>
            <tr className="border-b border-[#DFE0EB]">
              <th>ID</th>
              <th>
                {" "}
                <span className="ml-5"> Username</span>
              </th>
              <th>Product name</th>
              <th> <span className="-ml-5"> Quantity</span></th>
              <th>Price</th>
              <th>Total Price</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody className="">
            {CreatorModuleData.map((person,i) => (
              <>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>
                    <div className="flex items-center">
                      <span className="ml-6">{person.title}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  ">
                      <figure className="w-[2.75rem]  h-[2.75rem] rounded-full relative">
                        <Image
                          src={person.image}
                          layout="fill"
                          objectFit="contain"
                          alt=""
                        />
                      </figure>
                      <span className="ml-6">{person.title}</span>
                    </div>
                  </td>
                  <td>{person.walletid}</td>
                  <td>{person.subslvl}</td>
                  <td>{(person.walletid * person.subslvl)}</td>


                  <td>
                    {
                      <Button className="px-8 py-[0.875rem] hover:!bg-themecolor hover:!text-white bg-black text-white">
                        {person.type}
                      </Button>
                    }
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end  pr-8 pt-[3.5rem] mb-5">
          <i className="icon-arrow-left bg-themecolor py-1 px-2 rounded-full"></i>
          <i className="icon-arrow-right bg-themecolor py-1 px-2 rounded-full ml-4"></i>
        </div>
      </div>
    </>
  );
};

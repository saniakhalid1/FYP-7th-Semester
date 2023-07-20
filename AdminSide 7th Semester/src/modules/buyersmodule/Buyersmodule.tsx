import React, { useState } from "react";
import Image from "next/image";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/select/Select";
import { BuyersData } from "./BuyersmoduleData";
import Popups from "../../Components/popups";

export const BuyersModule = () => {
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
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Product</h2>
        <Button
          className="py-3 px-7 mb-4"
          onClick={() => {
            setState(1);
            setPopup(true);
          }}
        >
          Add New Product
        </Button>
      </div>

      <div className="overflow-hidden overflow-x-auto  max-w-[100%]">
        <table className="min-w-full at-tablestyle  at-tablestyle2">
          <thead>
            <tr className="border-b border-[#DFE0EB]">
              <th>ID</th>
              <th className="">
                {" "}
                <span className="ml-16"> Product name</span>
              </th>
              <th>Size</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {BuyersData.map((person, i) => (
              <>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="">
                    <div className="flex items-center  ml-16">
                      <figure className="w-[2.75rem]  h-[2.75rem] rounded-full relative">
                        <Image
                          src={person.image}
                          layout="fill"
                          objectFit="contain"
                        />
                      </figure>
                      <span className="ml-6">{person.title}</span>
                    </div>
                  </td>
                  <td>{person.email}</td>
                  <td>{person.walletid}</td>

                  <td>
                    <Button className="px-8 py-[0.875rem] hover:!bg-themecolor hover:!text-white bg-black text-white">
                      Edit
                    </Button>
                  </td>

                  <td className="t">
                    <Button className="px-6  py-[0.688rem]"> Remove</Button>
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
      {state && (
        <Popups
          show={popup}
          hide={setPopup}
          state={state}
          setstate={setState}
        />
      )}
    </>
  );
};

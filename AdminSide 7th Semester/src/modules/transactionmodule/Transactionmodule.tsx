import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Components/Button";
import { TransactionModuleData } from "./transactionmoduledata";

;

export const TransactionModule = () => {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [first, setfirst] = useState(false)
  const Data = [
    {
      id: 1,
      name: "All NFT’s",
    },
  ];
  return (
    <>
    <div className="flex justify-between items-center">
      <h2 className="text-3xl">Sellers</h2>
      <Button className="py-3  px-7">Export to CSV</Button>
      </div>
     
      <div className="overflow-hidden overflow-x-auto  max-w-[100%]">
        <table className="min-w-full at-tablestyle  at-tablestyle2">
          <thead>
            <tr className="border-b border-[#DFE0EB]">
              
              <th>Username</th>
              <th>Email ID</th>
              <th>Transaction ID</th>
              <th>Subscription Lvl</th>
              <th>Amount</th>
              <th>Qty</th>
              <th>Payment Date</th>
              <th>Collectible Namey</th>
              <th>Payment Method</th>
           


            </tr>
          </thead>
          <tbody className="">
            {TransactionModuleData.map((person) => (
              <>
                <tr>
                  
                  <td>
                   
                    <div className="flex items-center">
                      <figure className="w-[2.75rem] h-[2.75rem] relative">
                        <Image src={person.image} layout="fill" objectFit="contain"/>
                      </figure>
                      <span className="ml-6">{person.title}</span>
                    </div>
                 
                  </td>
                  <td>
                    {person.email}
                  </td>
                  <td>
                    {person.transid}
                  </td>
                  <td>
                    {person.subslvl}
                  </td>
                  <td>
                    {person.amount}
                  </td>
                  <td>
                    {person.qty}
                  </td>
                  <td>
                    {person.paymentDate}
                  </td>
                  <td>
                    {person.collectibleName}
                  </td>
                
                  
                  <td className="">
                    <Button className="px-11  py-[0.875rem] text-white bg-[#29303A]">Card</Button>
                   
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

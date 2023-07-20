import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Components/Button";

import { CreatorrequestsData } from "./creatorrequestsdata";
import { Router, useRouter } from "next/router";

;

export const CreatorrequestsModule = () => {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [first, setfirst] = useState(false)
  const router=useRouter()
  const Data = [
    {
      id: 1,
      name: "All NFT’s",
    },
  ];
  return (
    <>
    <div className="flex justify-between  items-center">
      <h2 className="text-3xl">Creator</h2>
     
      </div>
     
      <div className="overflow-hidden overflow-x-auto  max-w-[100%]">
        <table className="min-w-full at-tablestyle  at-tablestyle2">
          <thead>
            <tr className="border-b border-[#DFE0EB]">
              <th>Username</th>
              <th>Email ID</th>
              <th>Website</th>
              <th>Social Media</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody className="">
            {CreatorrequestsData.map((person,i) => (
              <>
                <tr onClick={()=>router.push('/creatorrequestsdetails')} className="cursor-pointer" >
                
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
                    {person.website}
                  </td>
                  {/* </a>
                  </Link> */}
                  <td>
                    {person.social}
                  </td>
                 
                  <td>
                   <Button className="px-9 py-[0.625rem] bg-[#00A71B] text-white">Accept</Button>
                   <Button className="px-9 py-[0.625rem] border border-[#777E91] bg-transparent text-[#777E91] ml-3">Reject</Button>


                  </td>
                  
                  
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end  pr-8 pt-[3.5rem]">
          <i className="icon-arrow-left bg-themecolor py-1 px-2 rounded-full"></i>
          <i className="icon-arrow-right bg-themecolor py-1 px-2 rounded-full ml-4"></i>

        </div>
      </div>
    </>
  );
};

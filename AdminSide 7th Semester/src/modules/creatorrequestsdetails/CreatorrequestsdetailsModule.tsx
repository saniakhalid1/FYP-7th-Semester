import Image from 'next/image'
import React from 'react'
import Button from '../../Components/Button'

const CreatorrequestsdetailsModule = () => {
  return (
    <div>
        <div className=' lg:w-1/2 w-full'>
          <div className='flex justify-between mb-8'>
        <div className='flex items-center '>
            <figure>
                <Image src="/assets/images/profile.png" height={90} width={90}/>
            </figure>
            <h5 className='ml-4 text-2xl font-Circular-Medium'>Kristin Watson</h5>
        </div>
        <div className='flex flex-col'>
        <Button className="px-[3.125rem] py-[0.625rem] bg-[#00A71B] text-white">Accept</Button>
        <Button className="px-[3.313rem] py-[0.625rem] border border-[#777E91] bg-transparent text-[#777E91] mt-3">Reject</Button>
        </div>
        </div>
        <h5 className='text-lg mb-4 font-Circular-Bold'>Creator Information</h5>
        <div className='flex gap-[10.188rem] mb-1'>
          <span className='text-[#535353] text-sm font-Circular-Medium'>Email ID</span>
          <span className='text-[#535353] text-sm font-Circular-Medium'>Contact</span>
        </div>
        <div className='flex gap-[3.813rem] mb-6'>
          <span className='font-Circular-Medium text-base text-[#535353]'>gretchen11@mail.com</span>
          <strong className='font-Circular-Medium text-base text-[#535353]'>+71 6926 2786</strong>
        </div>
        <h3 className='text-base font-Circular-Medium text-[#535353] mb-1'>Description</h3>
        <p className='text-[#333333] text-base font-Circular-Medium mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque volutpat sed quis viverra. Risus, posuere potenti malesuada sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque volutpat sed quis viverra. Risus, posuere potenti malesuada sit.</p>
        <div className='flex gap-[9.188rem] mb-4'>
        <h5 className='text-lg font-Circular-Bold'>Website</h5>
        <h5 className='text-lg font-Circular-Bold'>Social Media Handles</h5>
        </div>
        <div className='flex gap-[5.438rem]'>
          <span className='text-[#535353] font-Circular-Medium'>https://amazon.com</span>
          <span className='text-[#535353] font-Circular-Medium'>Twitter, Instagram, Facebook</span>
        </div>
        </div>

    </div>
  )
}

export default CreatorrequestsdetailsModule
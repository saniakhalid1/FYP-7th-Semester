import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Button from "../Button";
import Input from "../Input";




export const ResetComponent = () => {
  const [show, setShow] = useState(false);


 return (

    <div className="flex flex-col items-center">
     <figure className="mt-40">
        <svg
          width="243"
          height="57"
          viewBox="0 0 243 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4194 14.1704C11.8805 14.1506 13.2636 14.4328 14.5688 15.0171C15.8837 15.5914 17.0087 16.3787 17.9438 17.3788C18.8788 18.379 19.6142 19.5821 20.1499 20.9883C20.6856 22.3846 20.9438 23.865 20.9243 25.4296C20.9535 27.5388 20.5103 29.455 19.5947 31.178C18.6791 32.8912 17.4129 34.233 15.796 35.2034C14.1889 36.1639 12.4064 36.6294 10.4486 36.5997C9.02656 36.6294 7.66293 36.357 6.35774 35.7827C5.06229 35.1985 3.94216 34.4062 2.99735 33.4061C2.06229 32.4059 1.32203 31.2077 0.776578 29.8115C0.231124 28.4152 -0.026992 26.9546 0.0022287 25.4296C-0.0172518 23.865 0.235995 22.3846 0.761968 20.9883C1.29768 19.5821 2.0282 18.379 2.95352 17.3788C3.88859 16.3787 5.00384 15.5914 6.2993 15.0171C7.59475 14.4328 8.96812 14.1506 10.4194 14.1704ZM10.4486 33.3318C12.6012 33.3318 14.3301 32.6139 15.6353 31.178C16.9405 29.7323 17.5931 27.8161 17.5931 25.4296C17.5931 23.0332 16.9308 21.0972 15.6061 19.6218C14.2912 18.1364 12.5623 17.3937 10.4194 17.3937C8.33501 17.3937 6.63047 18.1463 5.30579 19.6515C3.98112 21.1467 3.31878 23.0728 3.31878 25.4296C3.31878 27.7468 3.98599 29.6431 5.3204 31.1186C6.66456 32.5941 8.37397 33.3318 10.4486 33.3318Z"
            fill="#29303A"
          />
          <path
            d="M41.5103 14.6012V36.1986H38.5152L27.6889 19.9188V36.1986H24.6937V14.6012H27.6889L38.5152 30.8809V14.6012H41.5103Z"
            fill="#29303A"
          />
          <path
            d="M49.5752 33.1536H59.6271L59.5979 36.1986H46.7262H46.5509V14.6012H49.5752H59.6271L59.5979 17.6759H49.5752V23.8105H58.6336L58.6044 26.7961H49.5752V33.1536Z"
            fill="#29303A"
          />
          <path
            d="M80.0232 14.1704C81.4842 14.1506 82.8673 14.4328 84.1725 15.0171C85.4875 15.5914 86.6125 16.3787 87.5475 17.3788C88.4826 18.379 89.218 19.5821 89.7537 20.9883C90.2894 22.3846 90.5475 23.865 90.5281 25.4296C90.5573 27.5388 90.1141 29.455 89.1985 31.178C88.2829 32.8912 87.0167 34.233 85.3998 35.2034C83.7927 36.1639 82.0102 36.6294 80.0524 36.5997C78.6303 36.6294 77.2667 36.357 75.9615 35.7827C74.6661 35.1985 73.5459 34.4062 72.6011 33.4061C71.6661 32.4059 70.9258 31.2077 70.3804 29.8115C69.8349 28.4152 69.5768 26.9546 69.606 25.4296C69.5865 23.865 69.8398 22.3846 70.3657 20.9883C70.9015 19.5821 71.632 18.379 72.5573 17.3788C73.4924 16.3787 74.6076 15.5914 75.9031 15.0171C77.1985 14.4328 78.5719 14.1506 80.0232 14.1704ZM80.0524 33.3318C82.205 33.3318 83.9339 32.6139 85.2391 31.178C86.5443 29.7323 87.1969 27.8161 87.1969 25.4296C87.1969 23.0332 86.5346 21.0972 85.2099 19.6218C83.895 18.1364 82.1661 17.3937 80.0232 17.3937C77.9388 17.3937 76.2342 18.1463 74.9096 19.6515C73.5849 21.1467 72.9226 23.0728 72.9226 25.4296C72.9226 27.7468 73.5898 29.6431 74.9242 31.1186C76.2683 32.5941 77.9778 33.3318 80.0524 33.3318Z"
            fill="#29303A"
          />
          <path
            d="M107.345 17.6759L97.3219 17.6462V24.1819L105.825 24.2116L105.781 27.1675H97.3219V36.1986H94.2975V14.6012H97.3219L107.374 14.6309L107.345 17.6759Z"
            fill="#29303A"
          />
          <path
            d="M132.927 36.1986L130.736 30.5393H121.531L119.369 36.1986H115.833L124.424 14.6012H127.653H127.872L136.463 36.1986H132.927ZM122.598 27.7765H129.698L126.134 18.5523L122.598 27.7765Z"
            fill="#29303A"
          />
          <path
            d="M201.722 36.6002H198.71V15.3484H201.722V36.6002Z"
            fill="#29303A"
          />
          <path
            d="M223.468 15.3484V36.6002H220.484L209.699 20.5809V36.6002H206.715V15.3484H209.699L220.484 31.3676V15.3484H223.468Z"
            fill="#29303A"
          />
          <path
            d="M243 15.3484V18.3739H236.247V36.6002H233.234V18.3739H226.466V15.3484H243Z"
            fill="#29303A"
          />
          <path
            d="M184.345 27.7437C184.345 38.5027 175.502 47.2245 164.594 47.2245C153.685 47.2245 144.842 38.5027 144.842 27.7437C144.842 16.9848 153.685 8.26294 164.594 8.26294C175.502 8.26294 184.345 16.9848 184.345 27.7437Z"
            fill="#090909"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M178.201 0V45.159L190.851 27.8734L193.921 30.0294L174.423 56.6714V13.0203L159.354 36.894V12.1648L146.692 29.0902L143.645 26.9028L163.131 0.855498V23.8737L178.201 0Z"
            fill="#E0F27B"
          />
        </svg>
      </figure>
     <div className=" mt-[8.313rem]">
       <h2 className="  font-Circular-Medium text-[#43435C] ">Reset Password</h2>
      
     </div>
     <span className="text-[#777E91]  text-center mt-2">Please enter new password for you account</span>

      <form className="mt-14" >
      <div className="mb-8 w-[30.625rem] xs:w-full">
          <Input
            placeholder="New Password"
            styles="at-fieldholder"
            className="pr-16 bg-white border-2 h-[60px] border-[#F6F6F6] pb-2"
            floatingLabel="labelname"
            labelname="Email"
          />
        </div>
        <div className="mb-12 w-[30.625rem] xs:w-full">
          <div className="relative mb-6">
            <Input
              type="Confirm Password"
              className="pr-16 bg-white border-2 h-[60px] border-[#F6F6F6] pb-2"
              styles="at-fieldholder"
              floatingLabel="labelname"
              labelname="Password"
              placeholder={"Password"}
              icon="icon-eye right-5"
              svgicon="right-5 top-[50%] translate-y-[-50%]"
              svgIconName={
                !show ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <path
                      d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.2804 0.469672C21.5733 0.762567 21.5733 1.23744 21.2804 1.53033L1.28033 21.5304C0.98744 21.8233 0.512567 21.8233 0.219672 21.5304C-0.0732223 21.2375 -0.0732243 20.7626 0.219668 20.4697L3.59007 17.0993C2.63583 16.2323 1.76266 15.1886 1.00731 14.003C0.462133 13.1486 0.214844 12.054 0.214844 11.005C0.214844 9.95594 0.462142 8.86136 1.00734 8.00695C3.39826 4.24858 6.90186 1.97998 10.7498 1.97998C12.8835 1.97998 14.9329 2.68491 16.7307 3.95861L20.2197 0.469668C20.5126 0.176776 20.9875 0.176778 21.2804 0.469672ZM15.6525 5.03686C14.1376 4.01888 12.4627 3.47998 10.7498 3.47998C7.53799 3.47998 4.46174 5.37118 2.27266 8.81252L2.27204 8.81351C1.91745 9.36902 1.71484 10.1642 1.71484 11.005C1.71484 11.8457 1.91745 12.6409 2.27204 13.1965C2.97564 14.3008 3.7833 15.2574 4.6521 16.0372L7.20494 13.4844C6.71039 12.7816 6.41992 11.9266 6.41992 11C6.41992 8.60583 8.35571 6.67004 10.7499 6.67004C11.6765 6.67004 12.5315 6.96051 13.2342 7.45506L15.6525 5.03686ZM12.149 8.54033C11.7364 8.30397 11.2603 8.17004 10.7499 8.17004C9.18414 8.17004 7.91992 9.43426 7.91992 11C7.91992 11.5104 8.05385 11.9865 8.29021 12.3991L12.149 8.54033ZM18.3299 6.34564C18.6526 6.08603 19.1247 6.13722 19.3843 6.45998C19.7682 6.93725 20.1453 7.45011 20.4932 7.99819C21.0378 8.85243 21.2849 9.94649 21.2849 10.9951C21.2849 12.0439 21.0377 13.1383 20.4927 13.9926C18.1018 17.7513 14.5981 20.0201 10.7499 20.0201C9.41339 20.0201 8.10475 19.7374 6.87888 19.2213C6.49713 19.0605 6.31796 18.6208 6.4787 18.239C6.63943 17.8573 7.07921 17.6781 7.46096 17.8388C8.5151 18.2827 9.62646 18.5201 10.7499 18.5201C13.9618 18.5201 17.038 16.6289 19.2271 13.1875L19.2277 13.1865C19.5823 12.631 19.7849 11.8358 19.7849 10.9951C19.7849 10.1543 19.5823 9.3591 19.2277 8.80358L19.2267 8.80192C18.9145 8.31 18.5716 7.84285 18.2155 7.40012C17.9559 7.07736 18.0071 6.60526 18.3299 6.34564ZM14.3959 10.9624C14.8033 11.0375 15.0726 11.4286 14.9975 11.836C14.6811 13.5518 13.2918 14.9411 11.5759 15.2575C11.1686 15.3326 10.7775 15.0633 10.7024 14.656C10.6273 14.2486 10.8966 13.8575 11.3039 13.7824C12.4081 13.5788 13.3188 12.6681 13.5224 11.5639C13.5975 11.1566 13.9886 10.8873 14.3959 10.9624Z"
                      fill="#F1C94A"
                    />
                  </svg>
                )
              }
            />
          </div>
          <div className="flex justify-end">
            <Link href="/reset">
              <a className="!text-white !text-4 block">Forget Password?</a>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between items-center xs:flex-col xs:items-start ">
         
              <Button className=" bg-themecolor sm:w-[30.625rem] !w-full xs:mb-10 mb-10 whitespace-nowrap"  type={'submit'} >
              Reset Password
              </Button>
            
         
        </div>

        
      </form>
    </div>



  );
};
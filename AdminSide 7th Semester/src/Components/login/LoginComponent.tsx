

import Button from "../Button";
import Input from "../Input";

export const LoginComponent = (setstate:any) => {

  return (
     
    <div className="flex flex-col justify-center  items-center  sm:w-[40rem] ">
     <h2 className="mt-12"> Add New Product</h2>

      <form className="mt-10">
        <div className="mb-8 w-[30.625rem] xs:w-full">
          <Input
            placeholder="Product Name"
            styles="at-fieldholder"
            className="pr-16 bg-white border-2 h-[60px] border-[#F6F6F6] pb-2"
            floatingLabel="Product Name"
            labelname="Product Name"
          />
        </div>
        <div className="mb-12 w-[30.625rem] xs:w-full">
          <div className="relative mb-6">
            <Input
              className="pr-16 bg-white border-2 h-[60px] border-[#F6F6F6] pb-2"
              styles="at-fieldholder"
              floatingLabel="Price"
              labelname="Price"
              placeholder={"price"}
            />
          </div>
          </div>
          <div className="mb-12 w-[30.625rem] xs:w-full">
          <div className="relative mb-6">
            <Input
              className="pr-16 bg-white border-2 h-[60px] border-[#F6F6F6] pb-2"
              styles="at-fieldholder"
              floatingLabel="Size"
              labelname="Size"
              placeholder={"Size"}
            />
          </div>
          </div>

          
        <div className="flex justify-between mb-5 items-center xs:flex-col xs:items-start ">
          <Button
            className=" bg-themecolor sm:min-w-[30.625rem] xs:w-full xs:mb-4"
           
          >
            Add Produuct
          </Button>
        </div>
      </form>
    </div>
  );
};

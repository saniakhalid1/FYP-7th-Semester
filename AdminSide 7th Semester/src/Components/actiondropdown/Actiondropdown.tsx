import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Iprops {
  title?: string;
  data: any;
}

const Actiondropdown = (props: any) => {
  console.log(dropdownData, "this is data");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full ">
          <button className="w-[2.625rem] h-[2.625rem] leading-[2.625rem] bg-graydull rounded-[7px] align-middle">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0.125C14.4647 0.125 11.0087 1.17335 8.06919 3.13748C5.12966 5.10161 2.83858 7.8933 1.48566 11.1595C0.132745 14.4258 -0.22124 18.0198 0.468471 21.4872C1.15818 24.9547 2.86061 28.1397 5.36047 30.6395C7.86034 33.1394 11.0454 34.8418 14.5128 35.5315C17.9802 36.2212 21.5742 35.8673 24.8405 34.5143C28.1067 33.1614 30.8984 30.8703 32.8625 27.9308C34.8267 24.9913 35.875 21.5353 35.875 18C35.8659 13.262 33.9798 8.72075 30.6295 5.3705C27.2793 2.02026 22.738 0.134085 18 0.125ZM18 33.125C15.0086 33.125 12.0843 32.2379 9.59701 30.576C7.10971 28.914 5.17111 26.5518 4.02633 23.7881C2.88155 21.0244 2.58203 17.9832 3.16563 15.0493C3.74923 12.1153 5.18975 9.42028 7.30502 7.30501C9.42029 5.18974 12.1153 3.74922 15.0493 3.16562C17.9832 2.58202 21.0244 2.88155 23.7881 4.02632C26.5518 5.1711 28.914 7.10971 30.576 9.597C32.2379 12.0843 33.125 15.0086 33.125 18C33.1205 22.01 31.5255 25.8545 28.69 28.69C25.8545 31.5255 22.01 33.1204 18 33.125ZM20.0625 18C20.0625 18.4079 19.9415 18.8067 19.7149 19.1459C19.4883 19.485 19.1662 19.7494 18.7893 19.9055C18.4124 20.0616 17.9977 20.1025 17.5976 20.0229C17.1975 19.9433 16.83 19.7469 16.5416 19.4584C16.2532 19.17 16.0567 18.8025 15.9771 18.4024C15.8976 18.0023 15.9384 17.5876 16.0945 17.2107C16.2506 16.8338 16.515 16.5117 16.8541 16.2851C17.1933 16.0585 17.5921 15.9375 18 15.9375C18.547 15.9375 19.0716 16.1548 19.4584 16.5416C19.8452 16.9284 20.0625 17.453 20.0625 18ZM28.3125 18C28.3125 18.4079 28.1915 18.8067 27.9649 19.1459C27.7383 19.485 27.4162 19.7494 27.0393 19.9055C26.6624 20.0616 26.2477 20.1025 25.8476 20.0229C25.4475 19.9433 25.08 19.7469 24.7916 19.4584C24.5032 19.17 24.3067 18.8025 24.2271 18.4024C24.1476 18.0023 24.1884 17.5876 24.3445 17.2107C24.5006 16.8338 24.765 16.5117 25.1041 16.2851C25.4433 16.0585 25.8421 15.9375 26.25 15.9375C26.797 15.9375 27.3216 16.1548 27.7084 16.5416C28.0952 16.9284 28.3125 17.453 28.3125 18ZM11.8125 18C11.8125 18.4079 11.6915 18.8067 11.4649 19.1459C11.2383 19.485 10.9162 19.7494 10.5393 19.9055C10.1624 20.0616 9.74772 20.1025 9.34763 20.0229C8.94755 19.9433 8.58005 19.7469 8.2916 19.4584C8.00315 19.17 7.80672 18.8025 7.72714 18.4024C7.64756 18.0023 7.6884 17.5876 7.84451 17.2107C8.00061 16.8338 8.26497 16.5117 8.60415 16.2851C8.94332 16.0585 9.34208 15.9375 9.75001 15.9375C10.297 15.9375 10.8216 16.1548 11.2084 16.5416C11.5952 16.9284 11.8125 17.453 11.8125 18Z"
                fill="#777E91"
              />
            </svg>
          </button>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 min-w-[250px] rounded-md  bg-white ">
          <div className="py-1">
            {props.data.map((item: any) => (
              <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={item.link}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700 ",
                      " px-4 py-3 text-lg flex items-center cursor-pointer"
                    )}
                  >
                    {/* <i className={item.icon}></i> */}
                    {item.id == "1" ? (
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.6163 1.15364C14.6663 1.19264 16.3393 2.49264 16.3393 2.49264C16.9473 2.85464 17.4223 3.50164 17.6023 4.26764C17.7813 5.02564 17.6513 5.80764 17.2343 6.46864C17.2315 6.47305 17.2287 6.47741 17.2191 6.49037L17.2115 6.50038C17.1439 6.58958 16.8496 6.96164 15.3646 8.82223C15.3508 8.84661 15.3351 8.86945 15.3181 8.89164C15.293 8.92435 15.2658 8.95442 15.2367 8.9818C15.1354 9.10934 15.0284 9.24335 14.9159 9.38424L14.688 9.6697C14.2177 10.2587 13.6599 10.9571 12.9981 11.7855L12.6584 12.2106C11.3807 13.8097 9.74443 15.8572 7.64827 18.4796C7.18927 19.0516 6.50127 19.3846 5.76227 19.3936L2.12327 19.4396H2.11327C1.76627 19.4396 1.46427 19.2016 1.38327 18.8626L0.564274 15.3916C0.395274 14.6726 0.563274 13.9306 1.02427 13.3546L10.4443 1.57264C10.4483 1.56864 10.4513 1.56364 10.4553 1.55964C11.4883 0.324643 13.3563 0.142643 14.6163 1.15364ZM9.394 5.287L2.19527 14.2916C2.02427 14.5056 1.96127 14.7816 2.02427 15.0466L2.70527 17.9316L5.74427 17.8936C6.03327 17.8906 6.30027 17.7616 6.47727 17.5416C7.38876 16.4012 8.53433 14.9679 9.71213 13.494L10.1288 12.9726L10.5462 12.4502C11.6508 11.0679 12.7421 9.70207 13.6551 8.55886L9.394 5.287ZM11.6103 2.51664L10.331 4.115L14.5918 7.38593C15.4119 6.3587 15.9514 5.68214 16.0013 5.61764C16.1653 5.35164 16.2293 4.97564 16.1433 4.61364C16.0553 4.24264 15.8243 3.92764 15.4913 3.72664C15.4203 3.67764 13.7353 2.36964 13.6833 2.32864C13.0493 1.82064 12.1243 1.90864 11.6103 2.51664Z"
                          fill="#29303A"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3846 6.7197C16.7976 6.7537 17.1056 7.1147 17.0726 7.5277C17.0666 7.5957 16.5246 14.3067 16.2126 17.1217C16.0186 18.8687 14.8646 19.9317 13.1226 19.9637C11.7896 19.9867 10.5036 19.9997 9.2466 19.9997C7.8916 19.9997 6.5706 19.9847 5.2636 19.9577C3.5916 19.9247 2.4346 18.8407 2.2456 17.1287C1.9306 14.2887 1.3916 7.5947 1.3866 7.5277C1.3526 7.1147 1.6606 6.7527 2.0736 6.7197C2.4806 6.7087 2.8486 6.9947 2.8816 7.4067C2.88479 7.4501 3.10514 10.1837 3.34526 12.8884L3.39349 13.4282C3.51443 14.7725 3.63703 16.0643 3.7366 16.9637C3.8436 17.9367 4.3686 18.4387 5.2946 18.4577C7.7946 18.5107 10.3456 18.5137 13.0956 18.4637C14.0796 18.4447 14.6116 17.9527 14.7216 16.9567C15.0316 14.1627 15.5716 7.4747 15.5776 7.4067C15.6106 6.9947 15.9756 6.7067 16.3846 6.7197ZM11.3454 0C12.2634 0 13.0704 0.619 13.3074 1.506L13.5614 2.767C13.6435 3.18037 14.0062 3.48226 14.4263 3.48889L17.708 3.489C18.122 3.489 18.458 3.825 18.458 4.239C18.458 4.653 18.122 4.989 17.708 4.989L14.4556 4.98885C14.4505 4.98895 14.4455 4.989 14.4404 4.989L14.416 4.988L4.04162 4.98888C4.03355 4.98896 4.02548 4.989 4.0174 4.989L4.002 4.988L0.75 4.989C0.336 4.989 0 4.653 0 4.239C0 3.825 0.336 3.489 0.75 3.489L4.031 3.488L4.13202 3.48161C4.50831 3.43279 4.82104 3.147 4.8974 2.767L5.1404 1.551C5.3874 0.619 6.1944 0 7.1124 0H11.3454ZM11.3454 1.5H7.1124C6.8724 1.5 6.6614 1.661 6.6004 1.892L6.3674 3.062C6.33779 3.2102 6.29467 3.35301 6.23948 3.48927H12.2186C12.1634 3.35301 12.1201 3.2102 12.0904 3.062L11.8474 1.846C11.7964 1.661 11.5854 1.5 11.3454 1.5Z"
                          fill="#F93232"
                        />
                      </svg>
                    )}

                    <h6 className={ `font-Circular-Medium text-base ${item.id=="1"? "text-black2":"text-[#F93232]"}  ml-4`}>
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

export default Actiondropdown;
function dropdownData(dropdownData: any, arg1: string) {
  throw new Error("Function not implemented.");
}

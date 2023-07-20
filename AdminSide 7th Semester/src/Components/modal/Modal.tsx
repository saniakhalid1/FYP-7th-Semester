import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { GrFormClose} from 'react-icons/gr';

interface Iprops {
  className?: string;
  children: any;
  show: any;
  hide: any;
}
export default function Modal({ show, hide, children, className }: Iprops) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 " onClose={hide}>
        <div className=" flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 0transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`${className} inline-block align-top bg-white
            rounded-3xl text-left overflow-hidden shadow-xl
            transform transition-all sm:align-middle`}
          >
            <div className=" absolute top-5 right-4 hidden">
              <button
                type="button"
                className=" text-primary text-xl hover:text-gray-500 focus:outline-none "
                onClick={() => {
                  hide(false);
                }}
              >
                <span className="sr-only">Close</span>
                {/* <i className="icon-cross" aria-hidden="true" /> */}
              <GrFormClose aria-hidden="true"/>
              </button>
            </div>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

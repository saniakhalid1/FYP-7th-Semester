import React, { Fragment } from "react";
import { SidebarNavigation } from "../../../data/sidebar-data";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}


const Sidebar = () => {

  const router = useRouter();

  return (
    <>
      <nav className="flex-1 bg-white pb-4 pt-[7rem] px-5 space-y-2">
        {SidebarNavigation.map((item, i) => (
          <div key={item.name}>
            <Link  href={item.href}>
              <a
                className={classNames(
                  router.pathname === item.href
                 
                    ? " !border-themecolor bg-themecolor   !text-white"
                    : "",
                  "group flex items-center     border-transparent  font-montserrat-regular  text-lg text-[#29303A]    rounded-xl"
                )}
              >
              <div
                className={`${
                  item.current && ``
                } py-6 pl-6 pr-0 w-full rounded-md flex items-center`}
              >
                <span
                  className={classNames(
                    router.pathname === item.href
                    // item.current
                      ? "text-white"
                      : "text-[#29303A]",
                    `mr-3 flex-shrink-0 text-xl `
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </div>
            </a>
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;

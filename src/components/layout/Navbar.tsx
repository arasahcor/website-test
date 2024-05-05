"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {  INavOptions } from "@/interfaces";
import { navigationOptions } from "../../../public/data/data";
import { GetIconsFooter } from "./footer/utils";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <nav
        className="flex items-center justify-between p-8 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Creon</span>
            <img
              className="h-[39px]"
              src="../images/logo.svg"
              alt="creon logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center lg:flex justify-between lg:gap-x-16">
          <div className="flex gap-x-11">
            {navigationOptions?.map((item: INavOptions) => (
              <div key={item.id} className="items-center flex">
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg  hover:text-blue  font-bold font-satoshi text-white "
                >
                  {item.name}
                </a>
                {item.soon && (
                  <span className="mb-[7px] ml-1 uppercase font-bold px-1 rounded-full text-badge text-purple font-satoshi bg-black">
                    soon
                  </span>
                )}
              </div>
            ))}
          </div>
          <button className="ease-in duration-300 text-lg bg-transparent hover:bg-blue  font-bold font-satoshi text-white py-1.5 px-7 border-2 border-white hover:border-blue hover:border-transparent rounded-md">
            Connect
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="flex flex-col justify-between  fixed inset-y-0 right-0 z-50 w-lg overflow-y-auto bg-black px-8 py-6 sm:max-w-sm ">
          <div>
            <div className="flex items-center justify-end gap-x-5 mt-1">
              <button className="ease-in duration-300 text-base bg-transparent hover:bg-blue  font-bold font-satoshi text-white py-1 px-5 border-2 border-white hover:border-blue hover:border-transparent rounded-md">
                Connect
              </button>
              <button
                type="button"
                className="bg-blue text-white -m-1.5 rounded-md p-1.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 ">
              <div className="flex flex-col">
                <div className="border-b border-gray-900"></div>
                {navigationOptions?.map((item: INavOptions, index: number) => (
                  <div key={item.id} className="pt-2">
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base  hover:text-blue  font-bold font-satoshi text-white "
                    >
                      {item.name}
                    </a>
                    {item.soon && (
                      <span className="ml-1 uppercase font-bold px-1 rounded-full text-badge text-purple bottom-[5px] relative font-satoshi bg-black">
                        soon
                      </span>
                    )}
                    <div className="border-b border-gray-900 pb-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <GetIconsFooter />
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

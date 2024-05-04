/* eslint-disable react/no-unescaped-entities */
"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IIcon, INavOptions } from "@/interfaces";
import { iconsFooter, navigationOptions } from "../../../public/data/data";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute w-full h-auto min-w-[1200px] max-w-full "
        src={require("../../../public/videos/main-background-video.mp4")}
        muted
        loop
        autoPlay
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple via-blue via-30% to-black to-70% opacity-40"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-8 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-[39px]"
                src="../../images/logo.svg"
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
                  {navigationOptions?.map(
                    (item: INavOptions, index: number) => (
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
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-2">
              {iconsFooter?.map((icon: IIcon) => (
                <button key={icon.id} className="text-white">
                  <img
                    src={icon.img}
                    className="h-icons w-icons"
                    alt={icon.name}
                  />
                </button>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative px-6 pt-24 md:pt-72 lg:px-8">
        <div className="px-8 xl:px-52 py-32 sm:py-48 lg:py-56">
          <h1 className="font-monument text-left text-white text-subtitle uppercase text-white md:text-title">
            The world's first platform for Tokenizing AI blockchain projects
          </h1>

          <div className="flex flex-col w-fit pt-9">
            <hr className="h-px my-1.5 bg-gradient-to-r from-blue to-purple border-0 "></hr>
            <p className="break-words font-satoshi font-bold  text-gradientText bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </p>
            <hr className="h-px my-1.5 bg-gradient-to-r from-blue to-purple border-0 "></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

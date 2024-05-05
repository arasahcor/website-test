/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { ICardInfo } from "@/interfaces";

//YTODO: i still have to fix the icon and the text
export const AccordionItem = (data: ICardInfo) => {

  const {imageUrl, title, description} = data
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
    <div className="items-center flex flex-row py-2 w-full text-white">
      <div className="w-96">
      <img src={imageUrl} alt={title} className="m-3"/>
      </div>
      <div className="flex flex-col px-6">
        <div className="py-3 flex flex-col justify-between">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between w-full"
          >
            <p className="hover:text-blue font-satoshi text-22s font-bold">{data.title}</p>
            {accordionOpen ? (
              <ChevronUpIcon
                color="white "
                className="h-6 w-6 hover:text-blue"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                color="white "
                className="h-6 w-6 hover:text-blue"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        <div
          className={`py-4 grid overflow-hidden transition-all duration-300 ease-in-out ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="break-words font-satoshi font-regular overflow-hidden text-lg">
          {description}
          </p>
        </div>
      </div>
    </div>
     <hr className="border-greyLine" />
     </div>
  );
};

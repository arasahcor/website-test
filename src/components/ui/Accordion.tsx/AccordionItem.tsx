/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { ICardInfo } from "@/interfaces";

export const AccordionItem = (data: ICardInfo) => {
  const { imageUrl, title, description } = data;
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="text-white">
      <div className="grid grid-cols-5 items-center py-4">
        <div className="col-span-1 pr-6">
          <img src={imageUrl} alt={title} className="w-24 m-2" />
        </div>
        <div className="col-span-4 flex  flex-col justify-between w-full">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between"
          >
            <div className="text-left">
              <p className="hover:text-blue font-satoshi text-22s font-bold">
                {data.title}
              </p>
            </div>
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
        <div className="col-span-5 grid grid-cols-subgrid ">
          <div
            className={`col-start-2 col-span-4 grid overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

import { accordionData } from "../../../public/data/data";
import { Accordion } from "../ui/Accordion.tsx/Accordion";

/* eslint-disable @next/next/no-img-element */
export default function Mission() {
  return (
    <section className="my-24 grid justify-items-between max-w-2xl grid-cols-1 lg:max-w-none mx-6  lg:grid-cols-1">
      <div className="flex flex-row gap-6 ">
        <div className=" text-left font-monument break-words uppercase font-regular text-subtitle text-white">
          <h2>
            Our vision is to support the innovation of AI blockchain project
            <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              {" "}
              while prioritizing communities and democratizing profits
            </span>
          </h2>

          <div className=" my-auto sm:my-10 ">
            <img
              className="w-full"
              src="../images/CREON1.webp"
              alt="CREON image"
            />
          </div>
        </div>
        <div className="my-auto">
        <Accordion data={accordionData}/>
        </div>
      </div>
    </section>
  );
}

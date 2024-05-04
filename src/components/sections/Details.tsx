/* eslint-disable @next/next/no-img-element */
import { ICardInfo } from "@/interfaces";
import { cards2 } from "../../../public/data/data";

export default function Details() {
  return (
    <section className="my-24 mx-auto grid justify-items-center w-lg xl:w-[97%]">
      {cards2.map((card: ICardInfo) => (
        <div
          key={card.id}
          className="my-7 lg:my-3 flex flex-col rounded bg-bgCards text-white md:max-w-full md:flex-row"
        >
          <div className="flex flex-col justify-start p-6">
            <h5 className="break-words font-monument text-white text-subtitle uppercase text-white mb-2">
              {card.title}
            </h5>
            <p className="break-words font-satoshi font-regular text-lg text-white">
              {card.description}
            </p>
          </div>
          <img
            className="h-96 w-full sm:rounded object-cover md:h-auto md:w-96 md:!rounded-none md:!rounded-r-lg sm:!rounded-t-none"
            src={card.imageUrl}
            alt={card.title}
          />
        </div>
      ))}
    </section>
  );
}

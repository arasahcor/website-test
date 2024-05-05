/* eslint-disable @next/next/no-img-element */
import { IIcon } from "@/interfaces";
import { iconsFooter } from "../../../../public/data/data";

export const GetIconsFooter = () => {
  return (
    <div className="flex items-center justify-start space-x-2">
      {iconsFooter?.map((icon: IIcon) => (
        <button key={icon.id} className="text-white hover:bg-blue hover:rounded-full">
          <img src={icon.img} className="h-icons w-icons" alt={icon.name} />
        </button>
      ))}
    </div>
  );
};

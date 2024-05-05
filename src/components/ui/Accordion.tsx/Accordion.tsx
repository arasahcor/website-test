import { ICardInfo } from "@/interfaces";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ data }: { data: ICardInfo[] }) => {
  return (
    <div>
      {data?.map((item: ICardInfo) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

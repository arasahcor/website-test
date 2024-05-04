/* eslint-disable @next/next/no-img-element */
import { ICardInfo } from "@/interfaces";
import { cards } from "../../../public/data/data";

//fix images colors, it should come with the images
export default function ComingSoon() {
  return (
    <section className="mt-5  grid justify-items-center lg:justify-items-between max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
      {cards.map((post: ICardInfo) => (
        <div
          key={post.id}
          className="w-full md:max-w-md bg-bgCards bg-opacity-70 rounded-md max-w-lg rounded "
        >
          <div className="px-7 py-4 relative h-40 md:h-48  xl:h-40 ">
            {post.coming && (
              <span className="font-bold px-1.5 py-0.4 rounded-full text-xs font-satoshi uppercase bg-white absolute right-6 top-[-6px]">
                Coming soon
              </span>
            )}
            <p className="break-words font-monument text-white text-subtitle uppercase text-white mb-2">
              {post.title}
            </p>
            <p className="break-words font-satoshi font-bold bg-gradient-to-r from-blue to-purple inline-block text-transparent text-gradientText bg-clip-text">
              {post.subtitle}
            </p>
          </div>
          <div className="pr-6">
            <img
              className="w-full rounded-r-md object-cover h-48"
              src={post.imageUrl}
              alt={post.title}
            />
          </div>
          <div className="px-7 py-4">
            <p className="font-satoshi font-regular text-lg text-white">
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

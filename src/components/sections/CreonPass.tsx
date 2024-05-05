import { passNFTData } from "../../../public/data/data";

export default function CreonPass() {
  return (
    <section className="grid justify-items-between max-w-2xl grid-cols-1  lg:max-w-none mx-6  lg:grid-cols-2">
      <div>
        <h1 className="font-monument text-left text-white text-subtitle uppercase text-white md:text-title">
          Creon Pass NFT
        </h1>

        <hr className="border-greyLine my-7" />
        <p className="break-words font-satoshi font-bold bg-gradient-to-r from-blue to-purple inline-block text-transparent text-gradientText bg-clip-text">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <div className="flex flex-col my-8">
          {passNFTData?.map((item: { id: string | number; text: string }) => (
            <p
              className="border my-1 w-fit rounded-md p-3 border-greyLine text-lg text-white font-regular break-words font-satoshi "
              key={item.id}
            >
              {item.text}
            </p>
          ))}
        </div>
          <button className="w-full lg:w-96 ease-in duration-300 hover:blue mt-6 rounded-md text-lg font-satoshi font-bold mb-10 py-3 text-white bg-gradient-to-r from-blue to-purple">
            Buy Creon Pass
          </button>
      </div>
      <div className="my-auto sm:my-10">
        <video
          className="w-full h-auto max-w-full min-w-96 max-w-full"
          src={require("../../../public/videos/nft-video.mp4")}
          muted
          loop
          autoPlay
        />
      </div>
    </section>
  );
}

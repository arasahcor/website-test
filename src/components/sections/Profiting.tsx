export default function Profiting() {
  return (
    <section className="mx-6 my-14">
      <h1 className="font-monument text-left text-white text-subtitle uppercase text-white md:text-title">
        Profiting Through
      </h1>
      <h2 className="font-monument text-right break-words uppercase font-regular  text-subtitle bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
        AI Innovation & Decentralization
      </h2>

      <div className="grid grid-cols-3 justify-items-between mt-10 text-white gap-10 items-center">
        <div className="col-span-3 lg:col-span-2 my-auto sm:my-10">
          <video
            className="w-full h-auto max-w-full min-w-96 max-w-full"
            src={require("../../../public/videos/creon-logo.mp4")}
            muted
            loop
            autoPlay
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="font-satoshi text-22s  mb-5 font-bold">
            The dynamic community driven business model of the future.
          </p>
          <p className="font-satoshi text-lg font-regular">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
}

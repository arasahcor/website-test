/* eslint-disable react/no-unescaped-entities */

import NavBar from "../layout/Navbar";

export default function CoverSection() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute w-full h-auto min-w-[1200px] max-w-full "
        // src={require("../../../public/videos/main-background-video.mp4")}
        muted
        loop
        autoPlay
      >
        <source
          src="../videos/main-background-video.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-purple via-blue via-30% to-black to-70% opacity-40"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar />
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

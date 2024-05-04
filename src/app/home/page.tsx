import ComingSoon from "@/components/sections/ComingSoon";
import Details from "@/components/sections/Details";
import HeroSection from "@/components/sections/HeroSection";
import Profiting from "@/components/sections/Profiting";
import PassNFT from "@/components/sections/passNFT";

//  /home directory
export default function Home() {
  return (
    <div>
      {/* header and cover*/}
      <HeroSection />
      <div className={"container mx-auto "}>
        {/* Creon Pass */}
        <PassNFT />
        {/* Profiting section */}
        <Profiting />
        {/* Our mission */}
        {/* Coming soon */}
        <ComingSoon />
        {/* details */}
        <Details/>
      </div>
    </div>
  );
}

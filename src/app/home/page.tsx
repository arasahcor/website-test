import ComingSoon from "@/components/sections/ComingSoon";
import HeroSection from "@/components/sections/HeroSection";
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
        {/* Profiting */}
        {/* Our mission */}
        {/* Coming soon */}
        <ComingSoon />
        {/* details */}
      </div>
    </div>
  );
}

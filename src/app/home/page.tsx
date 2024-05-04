import HCards from "@/components/sections/HCards";
import VCards from "@/components/sections/VCards";
import CoverSection from "@/components/sections/CoverSection";
import Profiting from "@/components/sections/Profiting";
import CreonPass from "@/components/sections/CreonPass";
import Mission from "@/components/sections/Mission";

//  /home directory
export default function Home() {
  return (
    <div>
      {/* header and cover*/}
      <CoverSection />
      <div className={"container mx-auto"}>
        <CreonPass />
        <Profiting />
        <Mission />
        <HCards />
        <VCards />
      </div>
    </div>
  );
}

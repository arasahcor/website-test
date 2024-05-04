import { GetIconsFooter } from "./utils";

export default function Footer() {
  return (
    <footer className="container mx-auto p-5 mt-10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-start gap-14 items-center">
        <p className="text-white font-satoshi font-regular text-base">
          © Creon 2023. All rights reserved.
        </p>
        <GetIconsFooter />
      </div>
      <div className="flex inline-flex items-center gap-1 text-white mt-4 sm:mt-0">
        <p className="text-white font-satoshi font-regular text-base">
          Powered by
        </p>
        <p className="font-monument uppercase">NIFTABLES</p>
      </div>
    </footer>
  );
}

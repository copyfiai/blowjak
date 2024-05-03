"use client";

import { useState } from "react";
import Image from "next/image";

const Presale = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const address = "0x5D639027789BD9D53c1a32dc1Cb18E6f1A16234c"; // Replace with your address
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div>
      <div className="pb-48 h-screen pt-48 flex justify-center items-center flex-col bg-sky-200 gap-4 relative border-b-4 border-black">
        <h1 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl">
          $BLOWJAK
        </h1>
        <div className="flex relative z-20">
          <div className="bg-gray-200 px-4 py-2 text-lg font-mono rounded-full border-2 border-black pr-32">
            0x5D639027789BD9D53c1a32dc1Cb18E6f1A16234c{" "}
          </div>
          <button
            className="bg-sky-500 text-lg absolute right-2 top-[4px] px-6 rounded-full hover:bg-sky-300 py-1 border-2 border-black tracking-wider text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000]"
            onClick={handleCopy}
          >
            {copied ? "Got it!" : "COPY"}
          </button>
        </div>
        <Image
          alt="Viking"
          src="/pre/1.png"
          height={320}
          width={320}
          className="absolute left-[-20px] bottom-0 z-0"
        />
      </div>
      <div className="py-20 h-screen px-10 relative border-b-4 border-black">
        <h2 className="md:text-6xl text-4xl text-left text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-20">
          Jakonomics
        </h2>
        <div className="flex justify-center text-left flex-col mx-auto md:w-1/2">
          <h3 className="text-sky-500 font-outline-2 md:text-5xl tracking-wide text-4xl [text-shadow:-4px_2px_0px_#000000]">
            Presale Breakdown
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#f06a22] rounded-full border-2 border-black" />
            <p className="text-left text-black/80">50% of Raise to LP</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-sky-500 rounded-full border-2 border-black" />
            <p className="text-black/80">
              50% of Raise for expenses/development/distribution
            </p>
          </div>
          <Image
            alt="Stoner"
            src="/pre/2.png"
            height={300}
            width={300}
            className="absolute right-0 bottom-0 z-0"
          />
        </div>
      </div>
      <div className="py-20 px-10 relative bg-[#f06a22] w-full">
        <h2 className="md:text-6xl text-4xl text-right text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal pb-20">
          Roadmap
        </h2>

        <Image
          alt="Stoner"
          src="/pre/3.png"
          height={300}
          width={300}
          className="absolute left-[-10px] bottom-0 z-0"
        />
        <div className="grid md:grid-cols-3 grid-cols-1 justify-between px-10 gap-8 mx-auto z-20 pb-80">
          <div>
            <h3 className="text-white font-outline-2 text-3xl [text-shadow:1px_2px_0px_#000000]">
              1. Start
            </h3>
            <p className="text-black/80 font-mono">
              Drawing up the Memes, the BlowJaks, Mapping out the Tokenomics,
              Writing the Smart Contract for the Presale, Establishing the
              Network
            </p>
          </div>
          <div>
            <h3 className="text-white font-outline-2 text-3xl [text-shadow:1px_2px_0px_#000000]">
              2. Presale
            </h3>
            <p className="text-black/80 font-mono">
              24 Hour Presale for BlowJaks. Might close earlier if the Milestone
              is hit.
            </p>
          </div>
          <div>
            <h3 className="text-white font-outline-2 text-3xl [text-shadow:1px_2px_0px_#000000]">
              3. Marketing
            </h3>
            <p className="text-black/80 font-mono">
              {" "}
              CEX, KOLs, Swaps, Listings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;

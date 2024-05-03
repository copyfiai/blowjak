"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Timer from "@/components/time";
import PieChart from "@/components/pie";
import PieChart2 from "@/components/pie2";

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
      <div className="py-52 flex justify-center items-center flex-col bg-sky-200 gap-4 relative border-b-4 border-black">
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
        <Timer date={new Date("2024-05-16")} />
        <Image
          alt="Viking"
          src="/pre/1.png"
          height={320}
          width={320}
          className="absolute left-[-20px] bottom-0 z-0"
        />
      </div>
      <div className="py-20 pb-40 px-10 relative border-b-4 border-black">
        <h2 className="md:text-6xl text-4xl text-left text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          Jakonomics
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-5 md:max-w-3xl mx-auto">
          <PieChart2 />
          <div className="flex justify-center text-left flex-col mx-auto md:w-1/2">
            <h3 className="text-sky-500 font-outline-2 md:text-5xl tracking-wide text-4xl [text-shadow:-4px_2px_0px_#000000] pb-5">
              Presale Breakdown
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f06a22] rounded-full border-2 border-black" />
              <p className="text-left text-black/80">50% of Raise to LP</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sky-500 shrink-0 rounded-full border-2 border-black" />
              <p className="text-black/80 shrink-0">
                50% of Raise for expenses/development/distribution
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:max-w-3xl mx-auto pb-36">
          <div>
            <PieChart />
          </div>
          <div className="flex justify-center text-left flex-col mx-auto md:w-1/2">
            <h3 className="text-sky-500 font-outline-2 md:text-5xl tracking-wide text-4xl [text-shadow:-4px_2px_0px_#000000] pb-5">
              Supply Breakdown
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f06a22] rounded-full border-2 border-black" />
              <p className="text-left text-black/80">
                50% of Supply to Presale Participants
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sky-400 rounded-full border-2 border-black" />
              <p className="text-black/80">15% of Supply to LP</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black" />
              <p className="text-black/80">
                15% of Tokens for Exchanges + Market Making
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-400 rounded-full border-2 border-black" />
              <p className="text-black/80">10% Marketing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
              <p className="text-black/80">10% Team/Advisors</p>
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
      </div>
      <div className="py-20 px-10 relative bg-orange-400 w-full">
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
        <div className="grid md:grid-cols-3 grid-cols-1 justify-between px-10 gap-8 mx-auto z-20 pb-64">
          <div>
            <h3 className="text-white font-outline-2 text-4xl [text-shadow:-2px_2px_0px_#000000] pb-2">
              1. Start
            </h3>
            <p className="text-black/80 font-mono">
              Drawing up the Memes, the BlowJaks, Mapping out the Jakonomics,
              Writing the Smart Contract for the Presale, Establishing the
              Network.
            </p>
          </div>
          <div>
            <h3 className="text-white font-outline-2 text-4xl [text-shadow:-2px_2px_0px_#000000] pb-2">
              2. Presale
            </h3>
            <p className="text-black/80 font-mono">
              The $BJ Presale will only be open for 24 hours. The Presale might
              close earlier if the Milestone is hit.
            </p>
          </div>
          <div>
            <h3 className="text-white font-outline-2 text-4xl [text-shadow:-2px_2px_0px_#000000] pb-2">
              3. Marketing
            </h3>
            <p className="text-black/80 font-mono">
              {" "}
              The Marketing consists of making use of the delegated $BJ supply
              to get listed on various CEX, stock up on promotion through KOLs,
              and make $BJ available on multiple swaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;

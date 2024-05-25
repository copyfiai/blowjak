"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Timer from "@/components/time";
import PieChart from "@/components/pie";
import PieChart2 from "@/components/pie2";
import Marquee from "react-fast-marquee";

const contri = [
  {
    address: "0x12231456890890123880947787",
    amount: 30,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 28,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 22,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 19,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 16,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 12,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 11,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 9,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 4,
  },
  {
    address: "0x12231456890890123880947787",
    amount: 0.2,
  },
];

const Presale = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const address = "0x9690e6b6E9f9EA3f96eC4B986Eb4036bf6cFD1E4"; // Replace with your address
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
      <div className="py-52 flex justify-center overflow-hidden items-center flex-col bg-sky-200 gap-4 relative border-b-4 border-black">
        <h1 className="md:text-7xl z-20 text-5xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl">
          $BLOWJAK
        </h1>
        <div className="grid grid-cols-4 py-10 justify-between w-full text-center max-w-2xl z-20">
          <div>
            <p className="h-10 w-10 outline border-b-2 border-black rounded-full bg-sky-300 mx-auto flex justify-center items-center">
              1
            </p>
            <div className="border-l-2 border-black h-4 w-0 mx-auto border-2" />
            <div className="text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000] z-40 md:text-xl text-lg">
              Launch
            </div>
          </div>
          <div>
            <p className="h-10 w-10 outline border-b-2 border-black rounded-full bg-sky-300 mx-auto flex justify-center items-center">
              2
            </p>
            <div className="border-l-2 border-black h-4 w-0 mx-auto border-2" />
            <div className="text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000] z-40 md:text-xl text-lg">
              Fire
            </div>
          </div>
          <div>
            <p className="h-10 w-10 outline border-b-2 border-black rounded-full bg-sky-300 mx-auto flex justify-center items-center">
              3
            </p>
            <div className="border-l-2 border-black h-4 w-0 mx-auto border-2" />
            <div className="text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000] z-40 md:text-xl text-lg">
              Almost there
            </div>
          </div>
          <div>
            <p className="h-10 w-10 outline border-b-2 border-black rounded-full bg-sky-300 mx-auto flex justify-center items-center">
              4.
            </p>
            <div className="border-l-2 border-black h-4 w-0 mx-auto border-2" />
            <div className="text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000] z-40 md:text-xl text-lg">
              KABOOM!
            </div>
          </div>
        </div>
        <Image
          alt="dynamite"
          width={700}
          height={300}
          src="/dyn.png"
          className="pb-10 mt-[-40px] mr-[-80px]"
        />


        <Timer date={new Date("2024-05-27")} />
        <div className="flex relative z-20">
          <div className="bg-gray-200 relative md:px-6 px-2 py-[12px] md:text-lg text-[10px] font-mono rounded-full border-2 border-black md:pr-32 pr-[88px]">
            https://pump.fun/ Link will be released{" "}

          </div>
          <button
            className="bg-sky-500 md:text-lg absolute right-2 top-[6px] md:px-6 px-4 md:py-[6px] text-sm rounded-full hover:bg-sky-300 py-1 border-2 border-black tracking-wider text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000]"
            onClick={handleCopy}
          >
            {copied ? "Got it!" : "COPY"}
          </button>
        </div>

        <m.img
          initial={{ rotate: 1, scale: 1, y: 0 }}
          animate={{ rotate: 2.5, scale: 1, y: 5 }}
          transition={{
            ease: "linear",
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="Stoner"
          src="/pre/1.png"
          height={300}
          width={300}
          className="absolute left-[0] bottom-[-10px] z-0  md:max-w-full max-w-52"
        ></m.img>
      </div>
      <div className="py-20 pb-40 px-10 relative border-b-4 border-black overflow-hidden bg-yellow-100">
        <h2 className="md:text-6xl text-4xl text-left text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          Jakonomics
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-5 md:max-w-3xl mx-auto border-b-4 border-l-2 outline outline-2 outline-black bg-white mb-8 rounded-3xl border-black pb-7">
          <PieChart2 />
          <div className="flex justify-center text-left flex-col mx-auto md:w-1/2">
            <h3 className="text-sky-500 font-outline-2 md:text-5xl tracking-wide text-4xl [text-shadow:-4px_2px_0px_#000000] pb-5 ml-2">
              Presale Breakdown
            </h3>
            <div className="flex items-center gap-2 ">
              <div className="w-4 h-4 bg-[#f06a22] rounded-full border-2 border-black" />
              <p className="text-left text-black/80">50% of Raise to LP</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sky-500 shrink-0 rounded-full border-2 border-black" />

              <p className="text-black/80 shrink-0">10% for Team</p>

            </div>
          </div>
        </div>
        {/* <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:max-w-3xl mx-auto mb-36 bg-white rounded-3xl border-l-2 border-black border-b-4 outline outline-2 outline-black pb-7">
          <div>
            <PieChart />
          </div>
          <div className="flex justify-center text-left flex-col mx-auto md:w-1/2 overflow-hidden">
            <h3 className="text-sky-500 font-outline-2 md:text-5xl tracking-wide text-4xl [text-shadow:-4px_2px_0px_#000000] pb-5 z-50 ml-2">
              Supply Breakdown
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f06a22] rounded-full border-2 border-black" />
              <p className="text-left text-black/80">
                50% of Supply to Presale Contributors
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sky-400 rounded-full border-2 border-black" />
              <p className="text-black/80">15% of Supply to LP</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black" />
              <p className="text-black/80">10% of Tokens for CEX Listing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-400 rounded-full border-2 border-black" />
              <p className="text-black/80">20% Marketing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
              <p className="text-black/80">5% Team</p>
            </div>
            <m.img
              initial={{ rotate: -1, scale: 1, x: 0 }}
              animate={{ rotate: 3, scale: 1, x: -5 }}
              transition={{
                ease: "linear",
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              alt="Stoner"
              src="/pre/2.png"
              height={300}
              width={300}
              className="absolute right-[0] bottom-[-10px] z-0  md:max-w-full max-w-52"
            ></m.img>
          </div>
        </div> */}
      </div>
      <div className="grid w-full pt-20 bg-sky-200 border-b-4 border-black justify-center relative">
        <div className="z-20">
          <h2 className="md:text-5xl text-3xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal pb-8">
            Top 10 Contributors
          </h2>
          <div className="h-[500px] bg-white max-w-[650px] rounded-lg border-b-4 relative border-black outline outline-2 mx-auto">
            <img
              alt="dynamite"
              src="/chars/batman.png"
              className="absolute h-64 bottom-0 right-0"
            />
          </div>
          {/* {contri.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-10 justify-between items-center gap-4 px-10 py-2 border-b-2 border-dotted border-black"
            >
              <p className="col-span-1 text-center">{index + 1}.</p>
              <p className="text-black text-center font-mono md:text-lg text-sm col-span-7">
                {item.address.slice(0, 10)}...{item.address.slice(-12)}
              </p>
              <p className="text-black md:text-lg text-right col-span-2">
                {item.amount} ETH
              </p>
            </div>
          ))} */}
        </div>

        <Marquee
          speed={120}
          autoFill
          className=" h-full z-0 pb-0 py-0 absolute bottom-0"
        >
          <img src="/road.png" className="mt-[-40px]" />
        </Marquee>
        <m.img
          initial={{ rotate: 1, y: 0, x: 0 }}
          animate={{ rotate: -2, y: 2, x: 2 }}
          transition={{
            ease: "linear",
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="lambo"
          src="/lambo.png"
          className=" absolute z-0 bottom-10 left-[-70px] h-80 z-2"
        />
      </div>
      <div className="md:py-20 pt-20 px-10 relative bg-orange-400 w-full overflow-hidden border-b-4 border-black">
        <h2 className="md:text-6xl text-4xl text-right text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal pb-20">
          Roadmap
        </h2>

        <m.img
          initial={{ rotate: 1, scale: 1, y: 0 }}
          animate={{ rotate: -2.5, scale: 1, y: 10 }}
          transition={{
            ease: "linear",
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="Stoner"
          src="/pre/3.png"
          height={300}
          width={300}
          className="absolute left-[0] bottom-[-10px] z-0 md:max-w-full max-w-52"
        ></m.img>
        <div className="grid md:grid-cols-3 grid-cols-1 md:justify-between justify-center w-sm px-10 gap-8 z-20 pb-64">
          <div className="max-w-sm mx-auto">
            <Image
              src="/img/pre.png"
              alt="rocket"
              height={280}
              width={280}
              className="mx-auto"
            />
            <h3 className="text-white font-outline-2 text-4xl [text-shadow:-2px_2px_0px_#000000] pb-2">
              1. Start
            </h3>
            <p className="text-black/80 font-mono">
              Drawing up the Memes, the BlowJaks, Mapping out the Jakonomics,
              Writing the Smart Contract for the Presale, Establishing the
              Network.
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <Image
              src="/img/rocket.png"
              alt="rocket"
              height={280}
              width={280}
              className="mx-auto"
            />
            <h3 className="text-white font-outline-2 text-4xl [text-shadow:-2px_2px_0px_#000000] pb-2">
              2. Presale
            </h3>
            <p className="text-black/80 font-mono">
              The $BJ Presale will only be open for 24 hours. The Presale might
              close earlier if the Milestone is hit.
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <Image
              src="/img/moon.png"
              alt="rocket"
              height={280}
              width={280}
              className="mx-auto"
            />
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

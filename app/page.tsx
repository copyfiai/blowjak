"use client";
import Walking from "@/components/walking";
import Image from "next/image";
import { useState } from "react";
import { motion as m } from "framer-motion";

//bg-[#f06a22]

const q = [
  {
    question: "1. What is BlowJak?",
    answer:
      "BlowJak represents an upcoming explosion on the Base Ecosystem. Blowing and Jaking it up, the BlowJak community is here to stay.",
  },
  {
    question: "2. What Chain is BlowJak on?",
    answer: "BlowJak is on the BASE ecosystem.",
  },
  {
    question: "3. How can I buy $BJ?",
    answer:
      "Make sure to download Metamask as an extension/app on your browser/mobile phone. Then, simply purchase $BJ using the BASE-ETH through a DEX like Uniswap for example. It's really easy to Blow it!",
  },
  {
    question: "4. How Long is Presale?",
    answer:
      "The Presale lasts 24h, might close earlier if the milestone is hit. Not everyone will make it in time to Jak it.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <main className="h-screen justify-center">
        <div className="bg-[url('/stripper.jpg')] grayscale absolute top-0 bottom-0 w-full bg-cover h-full z-0" />
        <div className="bg-[#f06a22] opacity-60 absolute top-0 left-0 right-0 bottom-0 " />
        <div className="flex justify-center items-center z-20 h-full">
          <h1 className="md:text-6xl xl:text-8xl text-4xl text-center text-white flex items-center [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-sm xl:max-w-4xl md:max-w-xl z-50">
            Blow it or Jak it, either way it&apos;ll go up.
          </h1>
        </div>
        <Walking />
      </main>
      <section className="flex relative flex-col justify-center overflow-hidden items-center bg-sky-200 h-screen md:pb-0 border-y-4 border-black mt-[-60px] pb-40">
        <m.img
          initial={{ rotate: 1, scale: 1, y: 0 }}
          animate={{ rotate: 2, scale: 1, y: -5 }}
          transition={{
            ease: "linear",
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="Stoner"
          src="/pre/4.png"
          height={300}
          width={300}
          className="absolute right-[0] bottom-[-10px] z-0  md:max-w-full max-w-52"
        ></m.img>
        <h1 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl">
          FAQ
        </h1>
        <div className="flex flex-col gap-8 pt-8">
          {q.map((item, index) => (
            <div className="flex flex-col items-center gap-8" key={index}>
              <h2
                className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 hover:text-yellow-400 ease-in-out transition-all duration-200"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </h2>
              <m.p
                className="text-md font-mono px-5 text-center max-w-xl mx-auto"
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                  y: openIndex === index ? 0 : 30,
                }}
                transition={{ duration: 0.4 }}
              >
                {item.answer}
              </m.p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col overflow-hidden relative items-center justify-center bg-yellow-100 py-20 pb-80 border-b-4 border-black">
        <m.img
          initial={{ rotate: -3, scale: 1, y: 0 }}
          animate={{ rotate: 3, scale: 1, y: -5 }}
          transition={{
            ease: "linear",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="Stoner"
          src="/pre/5.png"
          height={300}
          width={300}
          className="absolute left-[0] bottom-[-10px] z-0  md:max-w-full max-w-64"
        ></m.img>
        <h2 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          How to buy
        </h2>
        <p className="font-mono">Postlaunch</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 px-5 items-center">
          <div className="max-w-sm md:order-1 order-2">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 md:text-right pb-2">
              1. Metamask Extension/App
            </h1>
            <p className="md:text-right text-sm md:text-base font-mono text-black/80">
              Install Metamask as an extention on your Web Browser or as an App
              on your mobile phone.
            </p>
          </div>
          <Image
            src={"/img/met.png"}
            height={320}
            width={320}
            alt="Metamask"
            className="md:order-2 order-1 mx-auto"
          />

          <div className="max-w-sm md:order-4 order-4">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer order-4 [text-shadow:1px_2px_0px_#000000] font-outline-2 pb-2">
              2. Jak Up Eth
            </h1>
            <p className="font-mono text-sm md:text-base">
              Head over to bridge.base.org, connect your wallet on the Ethereum
              blockchain. Choose how much ETH you would like to bridge from the
              ERC20 network to Base. Remember to leave enough for gas fees!
            </p>
          </div>
          <Image
            src={"/img/cb.png"}
            height={320}
            width={320}
            alt="Metamask"
            className="md:order-3 order-2 mx-auto"
          />

          <div className="max-w-sm md:order-5 order-6">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 md:text-right pb-2">
              3. Buy $BJ
            </h1>
            <p className="md:text-right font-mono text-sm md:text-base">
              Head over to Uniswap and paste the $BJ contract Address listed on
              this website to swap your ETH.
            </p>
          </div>

          <Image
            src={"/img/horse.png"}
            height={310}
            width={310}
            alt="Metamask"
            className="md:order-6 order-5 mx-auto"
          />

          <Image
            src={"/img/bj.png"}
            height={300}
            width={300}
            alt="Metamask"
            className="md:order-7 order-7 mx-auto"
          />
          <div className="max-w-sm md:order-8 order-8">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 pb-2">
              4. Add $BJ on Metamask
            </h1>
            <p className="font-mono">
              The final step is to simply import the $BJ contract address to
              your Metamask Wallet to see your $BJ tokens. All aboard the
              BlowJak Train!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

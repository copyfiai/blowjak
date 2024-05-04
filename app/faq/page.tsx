"use client";

import { useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="flex relative flex-col justify-center overflow-hidden items-center bg-yellow-200 h-screen md:pb-0 pb-40 border-b-4 border-black">
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
        <h1 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          FAQ
        </h1>
        <div className="flex flex-col gap-4">
          {q.map((item, index) => (
            <div className="flex flex-col items-center gap-2" key={index}>
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
      <section className="flex flex-col overflow-hidden relative items-center justify-center bg-sky-300 py-20 pb-80 border-b-4 border-black">
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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-5 items-center">
          <div className="max-w-sm">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 md:text-right pb-2">
              1. Metamask Extension/App
            </h1>
            <p className="md:text-right text-sm md:text-base font-mono text-black/80">
              Install Metamask as an extention on your Web Browser or as an App
              on your mobile phone.
            </p>
          </div>
          <Image
            src={"/img/meta.png"}
            height={350}
            width={350}
            alt="Metamask"
          />
          <div></div>
          <div className="max-w-sm">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 pb-2">
              2. Jak Up Eth
            </h1>
            <p className="font-mono text-sm md:text-base">
              Head over to bridge.base.org, connect your wallet on the Ethereum
              blockchain. Choose how much ETH you would like to bridge from the
              ERC20 network to Base. Remember to leave enough for gas fees!
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="max-w-sm">
            <h1 className="md:text-4xl text-2xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 md:text-right pb-2">
              3. Buy $BJ
            </h1>
            <p className="md:text-right font-mono text-sm md:text-base">
              Head over to Uniswap and paste the $BJ contract Address listed on
              this website to swap your ETH.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="max-w-sm">
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
};

export default FAQ;

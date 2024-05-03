"use client";

import { useState } from "react";
import { motion as m } from "framer-motion";

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
      <section className="flex flex-col justify-center items-center bg-yellow-200 h-screen">
        <h1 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          FAQ
        </h1>
        <div className="flex flex-col gap-4">
          {q.map((item, index) => (
            <div className="flex flex-col items-center gap-4" key={index}>
              <h2
                className="text-4xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2"
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
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </m.p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-sky-400 py-20">
        <h2 className="md:text-7xl text-6xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10">
          How to buy
        </h2>
        <div className="grid grid-cols-2 gap-8 px-5">
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 text-right">
              1. Metamask Extension/App
            </h1>
            <p className="text-right font-mono text-sm">
              Install Metamask as an extention on your Web Browser or as an App
              on your mobile phone.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2">
              2. Jak Up Eth
            </h1>
            <p className="font-mono">
              Head over to bridge.base.org, connect your wallet on the Ethereum
              blockchain. Choose how much ETH you would like to bridge from the
              ERC20 network to Base. Remember to leave enough for gas fees!
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2 text-right">
              3. Buy $BJ
            </h1>
            <p className="text-right font-mono">
              Head over to Uniswap and paste the $BJ contract Address listed on
              this website to swap your ETH.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-white cursor-pointer  [text-shadow:1px_2px_0px_#000000] font-outline-2">
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

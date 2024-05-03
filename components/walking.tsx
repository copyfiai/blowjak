"use client";

import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

function Walking() {
  const imgSrc = [
    { img: "./chars/batman.png", name: "Batman" },
    { img: "./chars/clown.png", name: "Clown" },
    { img: "./chars/slow.png", name: "Slow" },
    { img: "./chars/viking.png", name: "Viking" },
    { img: "./chars/old.png", name: "Old" },
    { img: "./chars/gay.png", name: "Gay" },
    { img: "./chars/wierd.png", name: "Wierd" },
    { img: "./chars/gay3.png", name: "gay3" },
  ];

  const [imgNumber0, setImgNumber0] = useState(
    Math.floor(Math.random() * imgSrc.length)
  );
  const [imgNumber1, setImgNumber1] = useState(
    Math.floor(Math.random() * imgSrc.length)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.floor(Math.random() * imgSrc.length);
      const number = random + 1 === imgSrc.length ? 0 : random + 1;
      setImgNumber0(random);
      setImgNumber1(number);
    }, 14990);

    return () => clearInterval(timer);
  }, [imgNumber0]);

  return (
    <div className="overflow-hidden">
      <div className="fixed bottom-[-40px] z-10">
        <m.div //Walking from LEFT
          initial={{ x: -1200 }}
          animate={{ x: 2800 }}
          transition={{ duration: 15, repeat: Infinity }}
          className="walking"
        >
          <m.img
            initial={{ y: -0, rotate: -1, scale: 1 }}
            animate={{ y: 15, rotate: 2, scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              ease: "linear",
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-[300px]"
            src={imgSrc[imgNumber1].img}
            alt={imgSrc[imgNumber1].name}
          />
        </m.div>
      </div>

      <div className="fixed bottom-[-40px] z-10 other-side">
        <m.div //Walking from RIGHT
          initial={{ x: -2800 }}
          animate={{ x: 1000 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="walking"
        >
          <m.img
            initial={{ y: 0, rotate: -1 }}
            animate={{ y: 15, rotate: 2 }}
            transition={{
              ease: "linear",
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-[320px]"
            src={imgSrc[imgNumber0].img}
            alt={imgSrc[imgNumber0].name}
          />
        </m.div>
      </div>
    </div>
  );
}

export default Walking;

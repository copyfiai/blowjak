"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); //Phone menu
  return (
    <div className="flex justify-between items-center">
      <div>
        <m.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          transition={{ type: "spring", bounce: 0.25 }}
          className="w-full absolute z-20"
        >
          <nav className="flex justify-between m-auto h-24 md:h-32 bg-transparent items-center md:px-10 px-2.5">
            {/* LOGO */}
            <m.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              onClick={() => (window.location.href = "/")}
              whileTap={{ scale: 0.9 }}
              className="z-20"
            >
              <Link href={"/"}>
                <img
                  src="logo.png"
                  alt="logo"
                  className="h-16 md:h-28 shrink-0"
                />
              </Link>
            </m.div>
            {/* NAVIGATION */}
            <div className="flex gap-2">
              <m.button
                onClick={() => router.push("/presale")}
                className="md:px-5 px-3 bg-sky-500 text-lg md:text-4xl text-white md:py-2 py-1 font-outline-2 rounded-full font-bold border-b-4 border-sky-700 outline outline-sky-700 [text-shadow:-3px_1px_0px_#000000] hover:bg-sky-400 hover:border-sky-600 transition-all ease-in duration-100 focus:border-none"
              >
                Presale
              </m.button>
              <m.button
                onClick={() => router.push("/faq")}
                className="md:px-5 px-3 bg-yellow-500 text-lg md:text-4xl text-white md:py-2 py-1 font-outline-2 rounded-full font-bold border-b-4 border-yellow-700 outline outline-yellow-700 [text-shadow:-3px_1px_0px_#000000] hover:bg-yellow-400 hover:border-yellow-600 transition-all ease-in duration-100 focus:border-none"
              >
                FAQ
              </m.button>
            </div>
          </nav>
        </m.div>
      </div>
    </div>
  );
};

export default Navigation;

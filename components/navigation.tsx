"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Marq from "./marq";

const Navigation = () => {
  const router = useRouter();
  const params = usePathname();
  const isPresale = params === "/about";

  console.log(isPresale);

  console.log(params);
  const [isOpen, setIsOpen] = useState(true); //Phone menu
  return (
    <div className="flex justify-between items-center">
      <div className="z-50">
        <div className="w-full absolute z-20">
          <nav className="flex justify-between m-auto h-24 md:h-32 bg-transparent items-center md:px-10 px-5 pt-10 z-60">
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
                  className="h-16 md:h-28 shrink-0 z-50"
                />
              </Link>
            </m.div>
            {/* NAVIGATION */}
            <div className="flex gap-2 z-50">
              <m.button
                onClick={() => router.push(!isPresale ? "/about" : "/")}
                className="md:px-5 px-4 bg-sky-500 text-xl md:text-4xl text-white md:py-2 py-2 font-outline-2 rounded-full font-bold border-b-4 border-sky-700 outline outline-sky-700 [text-shadow:-3px_1px_0px_#000000] hover:bg-sky-400 hover:border-sky-600 transition-all ease-in duration-100"
              >
                {!isPresale ? "About" : "Home"}
              </m.button>
              {/* <m.button
                onClick={() => router.push("/faq")}
                className="md:px-5 px-3 bg-yellow-500 text-lg md:text-4xl text-white md:py-2 py-1 font-outline-2 rounded-full font-bold border-b-4 border-yellow-700 outline outline-yellow-700 [text-shadow:-3px_1px_0px_#000000] hover:bg-yellow-400 hover:border-yellow-600 transition-all ease-in duration-100 focus:border-none"
              >
                FAQ
              </m.button> */}
            </div>
          </nav>
        </div>
      </div>
      <Marq />
    </div>
  );
};

export default Navigation;

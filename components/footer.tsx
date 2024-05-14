import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <div className="fixed bottom-5 left-5 flex items-center gap-2.5 z-50 mt-[-50px]">
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-2xl text-xl text-left text-white [text-shadow:-2px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-2">
          Our Socials!
        </p>
        <div className="flex">
          <Link
            href="https://t.me/BlowJakOnBase"
            className="cursor-pointer hover:animate-spin"
          >
            <Image src="/social/ts.png" height={50} width={50} alt="Logo" />
          </Link>
          <Link
            href="https://twitter.com/BlowjakOnBase"
            className="cursor-pointer hover:animate-spin"
          >
            <Image src="/social/xs.png" height={40} width={40} alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

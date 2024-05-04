import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <div className="fixed bottom-5 left-5 flex items-center gap-2.5 z-50 mt-[-50px]">
      <Link
        href="https://t.me/BlowJak"
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
  );
};

export default Footer;

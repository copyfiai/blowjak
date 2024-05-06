import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <Marquee
      speed={80}
      autoFill
      className="py-2 pt-7 h-14 bg-yellow-200 z-20 overflow-hidden border-y-4 border-yellow-600"
    >
      <div className="flex text-2xl px-10 text-center text-white tracking- [text-shadow:-2px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl pb-10 py-5">
        <p>BLOWJAK</p>
      </div>
    </Marquee>
  );
};

export default Marq;

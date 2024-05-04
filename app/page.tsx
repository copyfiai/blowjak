import Walking from "@/components/walking";
import Image from "next/image";

//bg-[#f06a22]

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24  z-20">
      <div className="bg-[url('/background.jpg')] h-screen absolute top-0 bottom-0 w-full bg-cover z-0" />
      <div className="bg-orange-400 opacity-90 absolute top-0 left-0 right-0 bottom-0" />
      <div className="flex justify-center items-center z-20 h-screen">
        <h1 className="md:text-6xl text-4xl text-center text-white [text-shadow:-4px_2px_0px_#000000] font-outline-2 tracking-normal max-w-2xl">
          Blow it or Jak it, either way it&apos;ll go up.
        </h1>
      </div>
      <Walking />
    </main>
  );
}

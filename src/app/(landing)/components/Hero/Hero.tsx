import productHero from "../../../../../assets/beat-pack-vol1.png";

import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-black h-[70vh] relative flex  justify-center items-center italic ">
      <div className="absolute top-8 flex flex-col md:flex-row gap-4 w-full items-center justify-center">
        <Image
          src={productHero}
          alt="product hero"
          width={250}
          className="object-contain border-rounded block  shadow-md shadow-orange-500 rounded-md"
        />
        <div className="w-full max-w-sm self-start justify-self-center  mx-auto md:mx-0 p-4 relative">
          <span className="text-gray-700 bg-white  mt-7 block  shadow-sm shadow-white font-bold text-xl italic  w-auto  text-center animate-bounce">
            NEW BEATS PACK!
          </span>
          <h2 className="font-semibold font-serif text-white uppercase mt-4">
            Never Give Up
          </h2>
          <span className="text-orange-500 uppercase  block font-semibold">
            Trap
          </span>
          <p className="text-gray-200 font-extralight font-sans text-sm">
            Este paquete contiene 12 beats exclusivos con sonido tipo Anuel AA, Eladio Carrion, Lil Baby, Duki, Almithy, Blessed, Pirlo420, incluye STEMS, WAV, MP3.
          </p>
          <span className="text-gray-100 text-xs  self-end font-extraligh absolute right-6 mt-2 cursor-pointer underline">Revisar Licencias</span>
          <div className="mt-20 flex flex-row gap-x-4 cursor-pointer">
            <button className="bg-red-600 transition-all hover:bg-red-800 text-white px-5 py-2 rounded-full uppercase italic text-sm shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 ">
              Comprar Ahora
            </button>
            <p className="relative group text-white flex items-center cursor-pointer shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1">
              <span className="text-red-600 italic ">Demo</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-2  bg-orange-500 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-red-500 group-hover:w-1/2 group-hover:transition-all"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

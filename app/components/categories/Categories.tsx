import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const headingCategory = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const Categories = () => (
  <section className="w-full">
    <div className="bg-white md:pt-16 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={headingCategory.className}>
          <h2 className="text-2xl md:text-[32px] text-[#1E1E1E] font-bold mb-2 text-center">
            Categories
          </h2>
        </div>
        <div className={poppins.className}>
          <p className="text-center mb-6 md:mb-10 text-base md:text-[18px] text-[#1E1E1E80]">
            Find what you are looking for
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#C1DCDC] py-2 mt-4 pb-30 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:flex md:gap-8 lg:gap-10 gap-6 justify-center items-start">
          <div className="flex flex-col items-center rounded-lg w-full md:max-w-[300px] md:-mt-20">
            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mb-4">
              <Image
                src="/assets/Frame 36.png"
                alt="Natural Plants"
                fill
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                quality={100}
                priority
              />
            </div>
            <div className={`${headingCategory.className} w-full text-center`}>
              <h1 className="font-semibold text-[#1E1E1E] text-lg md:text-[18px]">Natural Plants</h1>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-lg w-full md:max-w-[300px]">
            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mb-4">
              <Image
                src="/assets/Frame 38.png"
                alt="Plant Accessories"
                fill
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                quality={100}
              />
            </div>
            <div className={`${headingCategory.className} w-full text-center mb-2`}>
              <h1 className="font-semibold text-[#1E1E1E] text-lg md:text-[18px]">Plant Accessories</h1>
            </div>
            <p className="text-sm text-gray-500 mb-4 text-center">
              Horem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
            </p>
            <button className="bg-white text-semibold border border-gray-300 hover:bg-gray-100 text-black flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm w-full max-w-[120px] cursor-pointer">
              Explore
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex flex-col items-center rounded-lg w-full md:max-w-[300px] md:-mt-20">
            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mb-4">
              <Image
                src="/assets/Frame 37.png"
                alt="Artificial Plants"
                fill
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                quality={100}
              />
            </div>
            <div className={`${headingCategory.className} w-full text-center`}>
              <h1 className="font-semibold text-[#1E1E1E] text-lg md:text-[18px]">Artificial Plants</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
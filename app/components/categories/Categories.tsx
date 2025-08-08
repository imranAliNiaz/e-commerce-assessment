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
    
    <div className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className={headingCategory.className}>
          <h2 className="text-[32px] text-[#1E1E1E] font-bold mb-2 text-center">
            Categories
          </h2>
        </div>
        <div className={poppins.className}>
          <p className="text-center mb-10 text-[18px] text-[#1E1E1E80]">
            Find what you are looking for
          </p>
        </div>
      </div>
    </div>

    
    <div className="bg-[#C1DCDC] py-12 mt-4">
      <div className="flex flex-col md:flex-row gap-10 justify-center max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center rounded-lg max-w-[600px] md:-mt-20">
          <div className="relative w-[300px] h-[28rem] mb-5">
            <Image
              src="/assets/Frame 36.png"
              alt="Natural Plants"
              fill
              style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              quality={100}
              priority
            />
          </div>
          <div className={headingCategory.className}>
            <h1 className="font-semibold text-[#1E1E1E] text-[18px] text-center">Natural Plants</h1>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-lg px-6 py-6 max-w-[600px]">
          <div className="relative w-[300px] h-[28rem] mb-5">
            <Image
              src="/assets/Frame 38.png"
              alt="Plant Accessories"
              fill
              style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              quality={100}
            />
          </div>
          <div className={headingCategory.className}>
            <h1 className="font-semibold text-[#1E1E1E] text-[18px] text-center">Plant Accessories</h1>
          </div>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Horem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
          </p>
          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-black flex items-center gap-2 px-4 py-2 rounded-md text-sm">
            Explore
            <span className="text-lg">→</span>
          </button>
        </div>

        <div className="flex flex-col items-center rounded-lg max-w-[300px] md:-mt-20">
          <div className="relative w-[300px] h-[28rem] mb-5">
            <Image
              src="/assets/Frame 37.png"
              alt="Artificial Plants"
              fill
              style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              quality={100}
            />
          </div>
          <div className={headingCategory.className}>
            <h1 className="font-semibold text-[#1E1E1E] text-[18px] text-center">Artificial Plants</h1>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Categories;

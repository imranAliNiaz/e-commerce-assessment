import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})
const headingCategory = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

const categories = [
  {
    name: "Natural Plants",
    imgSrc: "/assets/Frame 36.png",
  },
  {
    name: "Plant Accessories",
    imgSrc: "/assets/Frame 38.png",
    desc: "Horem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Artificial Plants",
    imgSrc: "/assets/Frame 37.png",
  },
];

const Categories = () => (
  <section className=" py-16 w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className={headingCategory.className}>
        <h2 className="text-[32px] text-[#1E1E1E] font-bold mb-2 text-center">Categories</h2>
      </div>
      <div className={poppins.className}>
        <p className="text-center mb-10 text-[18px] text-[#1E1E1E80]">Find what you are looking for</p>
      </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center bg-[#C1DCDC] w-full">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col items-center rounded-lg p-6 ${
              cat.desc ? "shadow-lg" : ""
            }`}
          >
            <div className="relative w-full h-[24rem] mb-5">
              <Image
                src={cat.imgSrc}
                alt={cat.name}
                fill
                style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                quality={100}
                priority={idx === 0} // Optionally prioritize first image
              />
            </div>
            <div className="font-semibold">{cat.name}</div>
            {cat.desc && (
              <>
                <p className="text-sm text-gray-500 mb-6">{cat.desc}</p>
                <button className="bg-[#48806b] text-white px-4 py-1 rounded-md">
                  Explore
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    
  </section>
);

export default Categories;

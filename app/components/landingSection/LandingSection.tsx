import React from "react";
import NavBar from "./components/NavBar";
import BestSellingSection from "./components/BestSellingSection";
import { FiSearch } from "react-icons/fi";

import { Poppins } from "next/font/google";
const dreamHeading = Poppins({
  weight: '800',
  subsets: ['latin'],
  display: 'swap'
})
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

// You can further subdivide Section1, Section2 etc. if needed
const LandingSection = () => (
  <section className="w-full bg-white">
    <NavBar />
    <div className="max-w-6xl mx-auto px-6 py-10  flex flex-col md:flex-row items-center gap-8 bg-[#C1DCDC] rounded-3xl">
      <div className="flex-1 px-12">
        <div className={dreamHeading.className}>
          <h1 className="text-[64px] font-extrabold mb-6 leading-tight">
            Buy your <br /> dream plants
          </h1>
        </div>

        <div className="mb-8 text-lg flex gap-6 items-center">
          <div className={poppins.className}>
            <span className="font-bold text-[18px]">50+</span>
            <span className="block text-sm">Plant Species</span>
          </div>
          {/* Divider line */}
          <div className="h-8 w-px bg-black mx-2" />
          <div className={poppins.className}>
            <span className="font-bold text-[18px]">100+</span>
            <span className="block text-sm">Customers</span>
          </div>
        </div>

        <div className="flex items-center bg-white p-2 rounded-md w-full md:w-3/4 mb-10">
          <input
            className="bg-transparent flex-1 outline-none p-2"
            placeholder="What are you looking for?"
          />
          {/* Rectangle container for the search icon */}
          <div className="ml-2 flex items-center justify-center w-10 h-10 bg-[#C1DCDC] rounded-md cursor-pointer">
            <FiSearch size={22} className="text-[#48806b]" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
        {/* Vector 186: the bottom left spiral/arrow */}
        <img
          src="assets/Vector 186.png"
          alt="Vector 186"
          className="absolute left-[-36px] bottom-0 w-28 h-28 object-contain z-10"
        />

        {/* Rectangle 2, main black-ish circle */}
        <div className="relative top-20">
          <img
          src="assets/Rectangle 2.png"
          alt="Rectangle"
          className="w-[620px] h-72 object-contain rounded-full z-20"
        />

        {/* Centered plant image */}
        <img
          src="assets/unsplash_cLaaxa4DSnc-removebg-preview 1.svg"
          alt="Plant in pot"
          className="absolute top-1/2 left-1/2 w-48 h-60 object-contain -translate-x-1/2 -translate-y-1/2 z-30"
        />
        </div>
        

        {/* Vector 187: the upper curved arrow */}
        <img
          src="assets/Vector 187.png"
          alt="Vector 187"
          className="absolute right-0 top-0 w-20 h-28 object-contain z-40"
        />
      </div>
    </div>
    <div><BestSellingSection /></div>
  </section>
);

export default LandingSection;








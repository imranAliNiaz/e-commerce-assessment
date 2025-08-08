import React from "react";
import NavBar from "./components/NavBar";
import BestSellingSection from "./components/BestSellingSection";
import { FiSearch } from "react-icons/fi";
import { Poppins } from "next/font/google";

const dreamHeading = Poppins({
  weight: '800',
  subsets: ['latin'],
  display: 'swap'
});

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
});

const LandingSection = () => (
  <section className="bg-white max-w-7xl md:mx-auto">
    <NavBar />
    
    <div className="relative bg-[#C1DCDC] rounded-3xl overflow-hidden">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 md:px-6 px-4 md:py-10 py-8 z-20">
          <div className={dreamHeading.className}>
            <h1 className="md:text-[60px] text-4xl font-extrabold md:mb-6 mb-4 leading-tight">
              Buy your <br /> dream plants
            </h1>
          </div>

          <div className="mb-8 text-lg flex md:gap-6 gap-4 items-center">
            <div className={poppins.className}>
              <span className="font-bold text-[18px]">50+</span>
              <span className="block text-sm">Plant Species</span>
            </div>
            <div className="h-8 w-px bg-black mx-2" />
            <div className={poppins.className}>
              <span className="font-bold text-[18px]">100+</span>
              <span className="block text-sm">Customers</span>
            </div>
          </div>

          <div className="flex items-center bg-white md:p-2 p-1 rounded-md w-3/4 md:mb-10 mb-6">
            <input
              className="bg-transparent flex-1 outline-none md:p-2 p-1 placeholder:text-sm placeholder:md:text-base"
              placeholder="What are you looking for?"
            />
            <div className="ml-2 flex items-center justify-center md:w-10 w-8 h-8 md:h-10 bg-[#C1DCDC] rounded-md cursor-pointer">
              <FiSearch size={22} className="text-[#48806b]" />
            </div>
          </div>
        </div>

        {/* Images - Mobile version (background) */}
        <div className="md:hidden absolute inset-0 overflow-hidden z-0 opacity-75">
          <div className="absolute top-0 right-4">
            <img
              src="assets/Vector 187.png"
              alt="Vector 187"
              className="object-cover w-14 h-24"
            />
          </div>
          <div className="absolute bottom-0 right-[-1]  w-[40%] h-[45%]">
            <img
              src="assets/Rectangle 2.png"
              alt="Rectangle"
              className="w-full h-full object-cover"
            />
            <img
              src="assets/unsplash_cLaaxa4DSnc-removebg-preview 1.svg"
              alt="Plant in pot"
              className="absolute bottom-0 right-0 w-32 h-46"
            />
            <div className="absolute  bottom-[20] left-[-80] z-20">
            <img
              src="assets/Vector 186.png"
              alt="Vector 186"
              className="object-contain w-18 h-14"
            />
          </div>
           
          </div>
        </div>

        {/* Images - Desktop version */}
        <div className="flex-1 md:flex hidden items-center justify-center relative">
          <div className="absolute md:left-0 md:bottom-[90] z-20">
            <img
              src="assets/Vector 186.png"
              alt="Vector 186"
              className="object-contain w-36 h-28"
            />
          </div>
          
          <div className="absolute md:bottom-0 md:right-[-80]">
            <img
              src="assets/Rectangle 2.png"
              alt="Rectangle"
              className="w-[680px] h-80 object-contain rounded-full z-20"
            />
            <div className="absolute bottom-0 z-10 right-[230]">
              <img
                src="assets/unsplash_cLaaxa4DSnc-removebg-preview 1.svg"
                alt="Plant in pot"
                className="md:w-48 md:h-100 object-cover z-10"
              />
            </div>
          </div>
          
          <div className="absolute top-2 right-4">
            <img
              src="assets/Vector 187.png"
              alt="Vector 187"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <BestSellingSection />
    </div>
  </section>
);

export default LandingSection;
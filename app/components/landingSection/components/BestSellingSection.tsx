import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})
const headingSelling = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})
const products = [
  {
    imgSrc: "/assets/Frame 9.png",
    title: "Fiddle Leaf Fig",
    price: "$25.00",
  },
  {
    imgSrc: "/assets/Frame 8.png",
    title: "Snake Plant",
    price: "$18.50",
  },
  {
    imgSrc: "/assets/Frame 7.png",
    title: "Monstera Deliciosa",
    price: "$32.00",
  },
];

export default function BestSellingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1  rounded-lg p-8 flex flex-col justify-center">
          <div className={headingSelling.className}>
            <h1 className="text-4xl text-[32px] text-[#1E1E1E] font-extrabold mb-6">Best Selling Plants</h1>
          </div>
          
          <div className={poppins.className}>
            <p className="text-[#1E1E1E80] mb-8">
            Easiest way to healthy life by buying your favorite plants
          </p>
          </div>
          <div>
             <button
            type="button"
            className="inline-flex items-center text-[#1E1E1E] bg-[#C1DCDC]  py-2 px-4 rounded-md font-semibold transition cursor-pointer"
          >
            See More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          </div>
          
        </div>

        
        {products.map(({ imgSrc, title, price }, idx) => (
          <div
            key={idx}
            className="flex-1  rounded-lg p-6 flex flex-col items-start"
          >
            <img
              src={imgSrc}
              alt={title}
              className="w-64 h-68 object-cover rounded-md mb-4"
            />
            <div className={poppins.className}>
            <h3 className="text-[18px] font-semibold mb-2">{title}</h3>
            <p className="text-[#1E1E1E80] font-bold">{price}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

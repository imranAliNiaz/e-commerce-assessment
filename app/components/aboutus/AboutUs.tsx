import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})
const headingAbout = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

const features = [
  {
    icon: (
      <img
        src="/assets/Group 1-A.png" 
        alt="Large Assortment"
        className="w-16 h-16"
      />
    ),
    title: "Large Assortment",
    desc: "We offer many different types of products with fewer variations in each category.",
  },
  {
    icon: (
      <img
        src="/assets/Group 1-B.png" 
        alt="Fast & Free Shipping"
        className="w-16 h-16"
      />
    ),
    title: "Fast & Free Shipping",
    desc: "4-day or less delivery time, free shipping and an expedited delivery option.",
  },
  {
    icon: (
      <img
        src="/assets/Group 1-C.png" 
        alt="24/7 Support"
        className="w-16 h-16"
      />
    ),
    title: "24/7 Support",
    desc: "Answers to any business-related inquiry 24/7 and in real-time.",
  },
];

const AboutUs = () => (
  <section className="w-full bg-white">
    <div className="max-w-7xl mx-auto px-6 md:py-10 py-4">
      <div className="text-center md:mb-12 mb-6">
        <div className={headingAbout.className}>
          <h2 className="text-[32px] text-[#1E1E1E] font-bold mb-2">About us</h2>
        </div>
        <div className={poppins.className}>
          <p className="text-[18px] text-[#1E1E1E80]">Order now and appreciate the beauty of nature</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-2 md:px-0">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  md:p-6 p-4 rounded-lg hover:bg-gray-100 w-full md:w-1/3"
          >
            {f.icon}
            <div className={headingAbout.className}>
              <h3 className="text-[18px] text-[#000000] font-semibold my-3">{f.title}</h3>
            </div>
            <div className={poppins.className}>
              <p className="text-center text-[#1E1E1E80] text-[18px]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;

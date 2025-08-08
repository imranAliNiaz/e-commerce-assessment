import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

const headingPoppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

const testimonials = [
  {
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "John Doe",
    role: "Teacher",
    imgSrc: "assets/Group 9.png",
    rating: 4.5,
  },
  {
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "John Doe",
    role: "Web Developer",
    imgSrc: "assets/Group 10.png",
    rating: 4.5,
  },
];

// Mock rectangle images for top-right decoration
const rectangleImages = [
  "/assets/Rectangle 3.png",
  "/assets/Rectangle 4.png",
  "/assets/Rectangle 5.png",
];

const Testimonial = () => (
  <section className="bg-white py-12 w-full relative min-h-[600px]">
    <div className="max-w-7xl mx-auto px-6 relative">
      
      
      <div className="absolute top-6 right-1 flex items-center gap-[1px]">
      
        <img
          src={rectangleImages[0]}
          alt="Rectangle Large"
          className="h-6 w-8 object-contain"
        />
        
        <img
          src={rectangleImages[1]}
          alt="Rectangle Medium"
          className="h-1 w-8 object-contain"
        />
        
        <img
          src={rectangleImages[2]}
          alt="Rectangle Small"
          className="h-1 w-8 object-contain"
        />
      </div>


      <div className={headingPoppins.className}>
        <h2 className="text-[32px] font-bold mb-8">What customers say about <br /> GREEMIND?</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-1 bg-[#C1DCDC] rounded-lg p-6 flex flex-col gap-4"
          >
            <div className={poppins.className}>
              <p className="text-gray-700">{t.text}</p>
            </div>

            <div className="flex items-center mt-4 gap-4">
              <img src={t.imgSrc} alt={t.name} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <div className={headingPoppins.className}>
                  <div className="font-semibold">{t.name}</div>
                </div>

                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
              <span className="ml-auto font-bold">
                <span className="text-[#1E1E1E]">★</span> {t.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;

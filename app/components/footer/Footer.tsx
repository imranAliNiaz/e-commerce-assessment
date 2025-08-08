import React from "react";
import { Poppins } from "next/font/google";
const poppins=Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})

const headingPoppins=Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

const Footer = () => (
  <footer className="bg-[#d1e7e2] py-10 w-full">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
      {/* Left logo and socials */}
      <div className="mb-8 md:mb-0">
        <h1 className="font-bold text-[18px] mb-2 text-[#000000]">GREEMIND</h1>
        <div className="mb-4 text-[18px] text-[#1E1E1E80]">
           <p className={poppins.className}>We help you find <br/> your dream plant</p>
        </div>
        
        <div className="flex gap-4">
          {/* Each icon wrapper: circle with border and background */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ border: "1px solid #1E1E1E80" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current text-[#1E1E1E80]"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.243l-1.919.001c-1.505 0-1.797.716-1.797 1.765v2.311h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.322-.591 1.322-1.324V1.325c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ border: "1px solid #1E1E1E80" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current text-[#1E1E1E80]"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.25 2.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 105 5 5 5 0 00-5-5zm0 2a3 3 0 11-3 3 3 3 0 013-3z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ border: "1px solid #1E1E1E80" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current text-[#1E1E1E80]"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1 4.52 4.52 0 00-7.69 4.13 13 13 0 01-9.46-4.8 4.53 4.53 0 001.4 6.07 4.41 4.41 0 01-2.04-.57v.06a4.53 4.53 0 003.63 4.44 4.42 4.42 0 01-2.03.07 4.54 4.54 0 004.23 3.14 9.05 9.05 0 01-5.6 1.94c-.36 0-.72-.02-1.05-.06a12.77 12.77 0 006.92 2.05c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.02-.63A9.18 9.18 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Footer links - unchanged */}
      <div className="flex gap-12">
        <div>
          <div className="mb-4 text-[18px]">
            <h4 className={headingPoppins.className}>Information</h4>
          </div>
         
          <ul className="text-[#1E1E1E80] space-y-3 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-[18px]">
            <h4 className={headingPoppins.className}>Company</h4>
          </div>
          <ul className="text-[#1E1E1E80] space-y-3 text-sm">
            <li><a href="#">Community</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Our story</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-[18px]">
            <h4 className={headingPoppins.className}>Contact</h4>
          </div>
          <ul className="text-[#1E1E1E80] space-y-3 text-sm">
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 text-xs text-gray-500 text-start">
      2023 all Right Reserved Term of use GREEMIND
    </div>
  </footer>
);

export default Footer;

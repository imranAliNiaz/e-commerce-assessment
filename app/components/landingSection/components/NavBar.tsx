import React from 'react'
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
import { Poppins } from "next/font/google";
const poppins=Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})

const NavBar = () => {
  return (
    <div className="max-w-6xl h-24 mx-auto flex items-center">
      {/* Container flex with space-between to place flex items at left, center, right */}
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        {/* Logo aligned left */}
        <div className="font-bold text-xl text-[#1E1E1E] cursor-pointer">
            <div className={poppins.className}>
              GREENMIND
            </div>
          
        </div>

        {/* Nav links centered, with horizontal spacing */}
        <nav className="flex space-x-8 text-[#1E1E1E] text-lg cursor-pointer">
          <a href="#" className={poppins.className}>Home</a>
          <a href="#" className={poppins.className}>Products</a>
          <a href="#" className={poppins.className}>Contacts</a>
        </nav>

        {/* Icons aligned right with some spacing */}
        <div className="flex items-center space-x-6 text-[#1E1E1E]   cursor-pointer">
          <MdOutlineLocalGroceryStore className='w-6 h-6'/>
          <MdOutlinePerson className='w-6 h-6'/>
          <span className="  text-lg font-bold select-none">|</span>
          <BsFilterRight className='w-6 h-6'/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

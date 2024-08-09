import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='px-4 md:px-14 mb-10'> 
      <div className=' w-full h-auto  border-gray-200 border-2 py-3'>
    <h1 className='text-xl md:text-2xl text-center text-white mt-5'>Thanks for visiting my portfolio!</h1>
     <div className='flex space-x-7 justify-center mt-10'>
     <a href=" https://x.com/Pughaz13?t=yOtqc6pKvUk4ntAiMhCEFg&s=08" className='text-white'><FaXTwitter  size={40} /></a>   
     <a href="https://github.com/pughaz2003" className='text-white'><AiOutlineGithub size={40} /></a>   
     <a href="https://www.instagram.com/pughaz700?igsh=eXU0NzJhM2swY3Yw" className='text-white'><FaInstagram size={40}  /></a>   
    </div>
     
      
      <div className='flex flex-nowrap gap-2 justify-center mt-6'>
          <h1 className='text-white mt-1'><FaRegCopyright size={22} /></h1>
          <h1 className='text-white text-xl'>2024 Pughaz's_portfolio</h1>
        </div>
        
      </div>
     </div>

  
     
  
  

   
  )
}

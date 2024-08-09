import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
  <div className='mb-10'>
    <h1 className='text-xl text-center text-white mt-5'>Thanks for visiting my portfolio!</h1>
     <div className='flex space-x-7 justify-center mt-10'>
     <a href="" className='text-white'><FaXTwitter  size={40} /></a>   
     <a href="" className='text-white'><AiOutlineGithub size={40} /></a>   
     <a href="" className='text-white'><FaInstagram size={40}  /></a>   
    </div>
     
      
      <div className='flex flex-nowrap gap-2 justify-center mt-6'>
          <h1 className='text-white'>&#169;</h1>
          <h1 className='text-white text-xl'>2024 Pughaz's_portfolio</h1>
        </div>
        
      </div>
     
  
  

   
  )
}

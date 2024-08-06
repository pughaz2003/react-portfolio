import React from 'react'
import image1 from '../assets/Screenshot.png'
import image2 from '../assets/Screenshot2.png'
import image3 from '../assets/Screenshot3.png'

export default function Projects() {
  return (
    <section className='px-5'>
      <h2 className='text-4xl gradient-text text-center font-semibold mt-14'>Projects</h2>
      <div className='flex flex-wrap gap-6 justify-center mt-16'>
      <div className='w-[360px] h-72 glass rounded-lg p-4'>
        <img src={image1} alt="" />
       
      </div>
      <div className='w-[360px] h-72 glass rounded-lg p-4'>
      <img src={image2} alt="" /> 
      
      </div>
      <div className='w-[360px] h-72 glass rounded-lg p-4'>
      <img src={image3} alt="" />
      
      </div>
      </div>
      
    </section>
  )
}

import React from 'react'
import image1 from '../assets/Screenshot.png'
import image2 from '../assets/Screenshot2.png'
import image3 from '../assets/Screenshot3.png'

export default function Projects() {
  return (
    <section id='project' className='px-5'>
      <h2 className='text-4xl gradient-text text-center font-semibold mt-14 font-hero-font'>Projects</h2>
      <div className='flex flex-wrap gap-6 justify-center mt-16'>
      <div className='w-[360px] h-72 bg-slate-700 rounded-lg p-4'>
        <img src={image1} alt="" />
        <div className='mt-7 flex justify-between'>
        <h1 className='text-xl text-white'>portfolio</h1>
        <div>  <a href="https://pughaz.netlify.app/#contact" className='h-5 w-14 px-4 py-2 rounded-lg bg-white'>view</a></div>
       
      
        </div>
       
       
      </div>
      <div className='w-[360px] h-72 bg-slate-700 rounded-lg p-4'>
      <img src={image2} alt="" /> 
      <div className='mt-7 flex justify-between'>
      <h1 className='text-xl text-white'>Instagram-UI clone</h1>
        <div><a href="https://github.com/pughaz2003/Instagram-UI-clone.git" className='h-5 w-14 px-4 py-2 rounded-lg bg-white'>view</a></div>
       </div>
     
      
      </div>
      <div className='w-[360px] h-72 bg-slate-700 rounded-lg p-4'>
      <img src={image3} alt="" />
      <div className='mt-7 flex justify-between'>
      <h1 className='text-xl text-white'>Tesla-UI clone</h1>
      <div>
      <a href="https://github.com/pughaz2003/tesla-UI-clone.git" className='h-5 w-14 px-4 py-2 rounded-lg  bg-white'>view</a>
      </div>
       
        </div>
      
      </div>
      </div>
      
    </section>
  )
}

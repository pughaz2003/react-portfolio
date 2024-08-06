import React from 'react'


export default function About() {
  return (
    <section id='' className='px-6 mb-10'>
    <h1 className='text-4xl gradient-text font-semibold text-center'>About</h1>
    
  <div className='text-white p-4  w-full md:w-3/4 h-auto border-2 border-purple-700 mb-14 shadow-[2px_1px_20px_6px_#5a67d8]  md:ml-32 mt-14 '>
  <p className='text-xl mt-3'>I'm Pughazhendhi, a dedicated and aspiring full-stack developer currently pursuing my Bachelor's degree in Computer Science and Engineering at Jaya Engineering college.</p >  
  <p className='text-xl mt-3'>I am deeply passionate about crafting immersive user experiences and am proficient in a variety of front-end technologies, including React.js, JavaScript, Tailwind CSS and HTML.</p>
  <p className='text-xl mt-3'>In backend I know Node js,MangoDB and mangoose</p>
    </div>
  
    
  
    <h1 className='text-3xl text-center gradient-text font-semibold'>Skills</h1>
    <div className=' flex flex-wrap justify-center gap-8 mt-16 '>
    <div className='w-64 h-72 glass rounded-md'>
      <h1 className='text-2xl text-center mt-4 font-semibold text-white'>programming languages</h1>
      <ul className='flex flex-wrap gap-7 justify-center mt-4'>
        <li className=' h-9 w-32 bg-slate-600 rounded-full text-center text-white py-1'  >Javascript</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>Python</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>C</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>java</li>
      </ul>
    </div>
    <div className='w-64 h-72  glass rounded-md'>
    <h1 className='text-2xl text-center mt-6 font-semibold text-white'>Frontend</h1>
      <ul className='flex flex-wrap gap-5 justify-center mt-4'>
        <li className=' h-9 w-32 bg-slate-600 rounded-full text-center text-white py-1'  >HTML</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>CSS</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>Javascript</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>Tailwindcss</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>ReactJs</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>TiltJs</li>
      </ul>
    </div>
    <div className='w-64 h-72  glass rounded-md'>
    <h1 className='text-2xl text-center mt-6 font-semibold text-white'>Known tools</h1>
      <ul className='flex flex-wrap gap-7 justify-center mt-4'>
        <li className=' h-9 w-32 bg-slate-600 rounded-full text-center text-white py-1'>Canva</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>Git</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>Github</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>Msoffice</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'> Vscode</li>
       </ul>
    </div>
    <div className='w-64 h-72  glass rounded-md'>
    <h1 className='text-2xl text-center mt-6 font-semibold text-white'>Backend</h1>
      <ul className='flex flex-wrap gap-7 justify-center  mt-5'>
        <li className=' h-9 w-32 bg-slate-600 rounded-full text-center text-white py-1'>Node Js</li>
        <li  className=' h-9 w-28 bg-slate-600 rounded-full text-center text-white py-1'>MangoDB</li>
        <li  className=' h-9 w-20 bg-slate-600 rounded-full text-center text-white py-1'>Express Js</li>
        
      </ul>
    </div>
    </div>
   

    
   
                  
    </section>
 ) 
}


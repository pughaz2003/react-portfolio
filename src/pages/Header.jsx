import  { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
  const [toogleMenu,setToogleMenu] = useState(false); 
  return (
    < header className='flex  justify-between bg-slate-700  px-5 py-2   rounded-full mt-4   ml-4 mr-4'>
      <a href="" className='text-3xl font-semibold text-white'>Port<span className='text-white'>folio</span></a>
    <nav className='hidden md:block'>
     <ul className='space-x-6  text-2xl text-white font-semibold'>
     <a className='' href="">Home</a>
     <a className='' href="">About</a>
     <a className='' href="">Project</a>
     <a className='' href="">Contact</a>
    </ul>
    </nav>
    
    
   {toogleMenu &&  <nav className='block md:hidden mobile-nav  text-white'>
    <ul className='flex flex-col text-2xl font-semibold space-y-7 mt-6 '>
     <a href=""className=''>Home</a>
     <a href="">About</a>
     <a href="">Project</a>
     <a href="">Contact</a>
     </ul>
    </nav>}
  <button onClick={() => setToogleMenu(!toogleMenu)}  className='block md:hidden text-white'><Bars3Icon className='text-white h-7'/></button>

  
    </header>
  )
}

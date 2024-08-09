 import  { useState } from 'react'
  import { Bars3Icon } from '@heroicons/react/24/solid'

  export default function Header() {
const [toogleMenu,setToogleMenu] = useState(false); 
 return (
< header className='sticky top-0  flex justify-between bg-slate-700 px-5 py-2 '>
<a href="" className='text-3xl font-semibold text-white font-hero-font'>Port<span className='text-fuchsia-600'>folio</span></a>
  <nav className='hidden md:block'>
     <ul className='space-x-6  text-2xl text-white font-semibold font-hero-font'>    
       <a className='' href="#home">Home</a>
       <a className='' href="#about">About</a>
     <a className='' href="#project">Project</a>
       <a className='' href="#contact">Contact</a>
     </ul>
     </nav>
    
    
     {toogleMenu &&  <nav className='block md:hidden  mobile-nav  text-white'>
      <ul className='flex flex-col text-2xl font-semibold space-y-7 mt-6 font-hero-font'>
       <a href="#home"className=''>Home</a>
       <a href="#about">About</a>
       <a href="#project">Project</a>
       <a href="#contact">Contact</a>
       </ul>
      </nav>}
    <button onClick={() => setToogleMenu(!toogleMenu)}  className='block md:hidden text-white'><Bars3Icon className='text-white h-7'/></button>

  
    </header>
   )
  }


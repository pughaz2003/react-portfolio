import image from "../assets/new.png"
import { useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Home() {
const [typeEffect] = useTypewriter({
  words: ['Developer', 'Designer' ,'programer'],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40

})

  return (
    <section className='px-5 mb-14 '>
  <div className='container  mx-auto  flex justify-center flex-col sm:flex-row'>
           <div className='md:w-1/2  text-center md:text-left'>
            <h2 className=' text-white text-3xl  font-bold  mt-14 '>Hello, I'm <span className="gradient-text text-3xl lg:text-4xl font-bold">
            pughazhendhi</span> </h2>
            <p className='text-3xl text-white mt-3'>and i am a Passionate</p>
          <div className="mt-2"><span className='font-bold gradient-text text-3xl lg:text-4xl'>{typeEffect}</span> <span className="bg-white"><Cursor /></span></div>
          <div className='mt-7'>
    <a href="" className='w-4 h-3  bg-gradient-to-r from-gray-100 to-gray-300 p-3 rounded-full'>Let's Connect</a>
            </div>
            </div>
        <div className='md:w-1/2'>
         <img src={image} className="" alt="" />
           </div>
         </div>
     </section>
   )
 }

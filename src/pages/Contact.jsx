import React from 'react'
import emailjs from 'emailjs-com'
export default function Contact() {
function sendEmail(e){
e.preventDefault();
emailjs.sendForm('service_7h8z5ca','template_khrhcqm',e.target,"Fbu-EpR3jkU10V85s").then(res =>{
  console.log(res);
}).catch(err => console.log(err))

}


  return (
    <section id="contact" className=''>
             <h2 className="text-3xl gradient-text font-semibold text-center mt-10 font-hero-font">Contact me</h2>
                <div className="flex items-center justify-center p-12">
                   <div className="mx-auto w-full max-w-[550px]">
                   
    <form id="contact-form"  onSubmit={sendEmail}>
  <input type="hidden" name="contact_number"/>
    <div className="mb-5">
    <label for="name"className="" ></label>
    <input type="text" name="name" placeholder= "Name"
    className="w-full rounded-md border border-[#e0e0e0] bg-slate-700 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-800 focus:shadow-md"
         /> </div>
 <div className="mb-5">
<label for="email"className="mb-3  font-semibold text-[20px] "></label>
<input type="email"  name="user_email" placeholder="Email" className="w-full rounded-md border  border-[#e0e0e0] bg-slate-700 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-800 focus:shadow-md"/></div>
                       
<div className="mb-5"> 
  <label for="message"className="">
    </label>
  <textarea rows="4" name="message" placeholder="Type your message"className="w-full resize-none rounded-md border border-[#e0e0e0] bg-slate-700 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-900 focus:shadow-md"></textarea>
                           
  </div>
  <div className="text-center">
 <button className="gradient-text px-8 py-2 rounded-md border-violet-800 border-2  font-semibold text-xl outline-none  hover:opacity-80 ease-in duration-200 " type="submit" value="Send">Submit</button>
                        
                       </div>
                     </form>
                   </div>
                 </div>
              </section>
  )
}


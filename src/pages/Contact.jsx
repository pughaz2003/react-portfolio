import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
             <h2 className="text-3xl gradient-text font-semibold text-center mt-10">Contact me</h2>
                <div className="flex items-center justify-center p-12">
                   <div className="mx-auto w-full max-w-[550px]">
                   
                     <form id="contact-form">
                      <input type="hidden" name="contact_number"/>
                       <div className="mb-5">
                         <label
                           for="name"
                           className="" ></label>
                         <input
                           type="text"
                           name="user_name"
                        placeholder= "Name"
                           className="w-full rounded-md border border-[#e0e0e0] glass py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-800 focus:shadow-md"
                         />
                       </div>
                       <div className="mb-5">
                         <label for="email"className="mb-3  font-semibold text-[20px] text-orange-500"></label>
                         <input
                           type="email"
                           name="user_email"
                           placeholder="Email"
                           className="w-full rounded-md border border-[#e0e0e0] glass  py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-800 focus:shadow-md"
                           />
                          
                       </div>
                       
                       <div className="mb-5">
                         <label for="message"className="">
                         </label>
                         <textarea
                           rows="4"
                           name="message"
                           placeholder="Type your message"
                           className="w-full resize-none rounded-md border border-[#e0e0e0] glass py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-900 focus:shadow-md"
                           ></textarea>
                           
                       </div>
                       <div className="text-center">
                         <button
                         className="gradient-text px-8 py-2 rounded-md border-violet-800 border-2  font-semibold text-xl outline-none" type="submit" value="Send">Submit</button>
                        
                       </div>
                     </form>
                   </div>
                 </div>
              </section>
  )
}


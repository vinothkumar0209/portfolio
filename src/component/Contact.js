import React from 'react'


function Contact() {

  const config ={
     Email : 'vinothkumar932k@gmail.com',
     Phone : '+91 842832101'
  }
  return (
    <section id='Contact' className='flex flex-col  bg-primary px-5 py-32 text-white'>
        
        
           <div className='flex  flex-col items-center'>
            <h1 className='text-4xl mb-5 w-[140px] font-bold text-sky-400'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me.</p>
            <p className='py-2'><span className='font-bold'>Email : </span> {config.Email} </p>
            <p className='py-2'><span className='font-bold'>Phone : </span> {config.Phone} </p>
            </div>
    </section>
  
  )
}
export default Contact
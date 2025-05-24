import React from 'react'
import AboutImg from '../assets/aboutImg.gif'

function About() {

  const config = {
    line1 : 'Hi, My name is Vinothkumar D. I am a Full Stack Web Developer. I built simple Ecommerce website with React.js,CSS,HTML.',
    line2 : 'I am proficient in Frontend Skils like React, Axios, Tailwind CSS and Many more...'

  }
  return (
    <section id='About' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='px-32 py-32  md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
           <div className='flex flex-col justify-center px-10'>
            <h1 className='text-4xl mb-5 w-[170px] font-bold text-sky-400'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            </div>
        </div>
    </section>
  
  )
}
export default About

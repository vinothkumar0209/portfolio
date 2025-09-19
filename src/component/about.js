import React from 'react'
import AboutImg from '../assets/aboutImg.gif'

function About() {

  const config = {
    line1 : '• Hi, My name is Vinothkumar D. I am a Full Stack Web Developer. I’m a curious person who enjoys learning and exploring new ideas.',
    line2 : '• I have hands-on experience with React.js, ASP.NET Core, C#, SQL, MySQL, HTML, CSS, and JavaScript.',
    line3 : '• I enjoy building web projects that solve real problems and look great.',
    line4 : '• I like working with people, sharing knowledge, and collaborating on projects.',
    line5 : '• I’m positive, adaptable, and always open to learning new technologies.'

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
            <p className='pb-5'>{config.line3}</p>
            <p className='pb-5'>{config.line4}</p>
            <p className='pb-5'>{config.line5}</p>
            </div>
        </div>
    </section>
  
  )
}
export default About

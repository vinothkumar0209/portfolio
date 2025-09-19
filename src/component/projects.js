import React from 'react'
import website1 from '../assets/website1.jpg'
import website2 from '../assets/website2.jpg'
import website3 from '../assets/website3.jpg'

function Projects() {

  const config ={
   projects : [
      {
         image : website1,
         description : 'Hotel Booking Website',
         link :'https://vinothkumar0209.github.io/Hotel_Booking/'
      },
      {
         image : website2,
         description : 'GYM Transform Website',
         link :'https://github.com/vinothkumar0209/Fitness_Gym'
      },
      {
         image : website3,
         description : 'A Ecommerce Website. Built with React.js',
         link :'https://github.com/vinothkumar0209/amazon-clone'
      }
   ]
  }    
  return (
    <section id='Projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
        <div className='w-full'>
           <div className='flex flex-col px-10 py-10 '>
              <h1 className='text-4xl mb-5 w-[140px] font-bold text-sky-400'>Projects</h1>
              <p className=''>These are some of my projects. I have build these with .NET,Asp.NET MVC,C#,MS SQL,MYSQL,React.js,CSS & HTML check them out.. </p>
           </div> 
        </div>
        <div className='w-full'>
           <div className='flex flex-col md:flex-row px-10 gap-10 justify-evenly'>
              {config.projects.map((project)=>(
                  
                    <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} />
                        <div className='project-detail'>
                          <p className='text-center px-3 py-10'>{project.description}</p>
                          <div className='flex justify-center py-5'>
                           <a className='btn' target='-blank' href={project.link}>View Project</a>
                          </div>
                        </div>   
                     </div>
                  
              ))}          
              
           </div>
        </div>
    </section>
  )
}

export default Projects
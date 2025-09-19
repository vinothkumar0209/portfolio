import React from 'react'
import profile from '../assets/profileImg.gif'
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function Profile() {

  const config = {
    line : 'Im a Full-Stack Developer',
    social : {
      x : "https://x.com/vk80085645",
      instagram : "http://instagram.com/vinothvk.__",
      facebook : "http//facebook.com/vinoth vk",
      LinkedIn : "http://linkedin.com/in/vinothkumar0209",
      github : "https://github.com/vinothkumar0209"
    }
  }
  return (

    <section id='Profile' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-4xl'>Hi , <br/> Im <span className='text-sky-400'>VINOTHKUMAR</span>
         <p className='text-2xl'>{config.line}</p>
        </h1>
        <div className='flex py-10 text-sky-400'>
            <a href={config.social.LinkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
            <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
            <a href={config.social.x} className=' hover:text-white'><AiOutlineTwitter size={40} /></a>

        </div>
      </div> 
        <img className='md:w-1/3' src={profile}/>
    </section>
  )
}

export default Profile
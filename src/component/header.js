import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-3 bg-primary">
        <a className="font-bold text-sky-400 text-4xl  mb-5 " href="#">Portfolio</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
             <li className=' hover:text-sky-400'><a href="#/">Home</a></li>
             <li className=' hover:text-sky-400'><a href="#About">About</a></li>
             <li className=' hover:text-sky-400'><a href="#Projects">Projects</a></li>
             <li className=' hover:text-sky-400'><a href="#Resume">Resume</a></li>
             <li className=' hover:text-sky-400'><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
             <li><a href="#/">Home</a></li>
             <li><a href="#About">About</a></li>
             <li><a href="#Projects">Projects</a></li>
             <li><a href="#Resume">Resume</a></li>
             <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
        </header>
}
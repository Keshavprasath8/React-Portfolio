import React from 'react'
import logo from './Logo.png'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
// import { Link } from "react-router-dom"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="sticky top-0 z-10 bg-indigo-200 flex justify-between px-5 py-4 ">
            <a href=""><img src={logo} width="50px" height="50px" alt="Logo" /></a>
        <div className="hidden md:block">
        <ul className="flex t">
       <li><a href="#home" className='text-xl font-total-font'>Home</a></li>
       <li><a href="#about" className='text-xl font-total-font'>About</a></li>
       <li><a href="#project" className='text-xl font-total-font'>Projects</a></li>
       <li><a href="#contact" className='text-xl font-total-font'>Contact Me</a></li>
       <li></li>
        </ul>
        </div>
       
        {toggleMenu && <div className="z-10 mobile-nav flex justify-end mt-2 block md:hidden">
        <ul  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[0] mt-3 w-40 p-2 shadow">
        <li ><a href="#home" className="hover:bg-gray-400">Home</a></li>
        <li ><a href="#about" className="hover:bg-gray-400">About</a></li>
        <li ><a href="#project" className="hover:bg-gray-400">Project</a></li>
        <li ><a href="#contact" className="hover:bg-gray-400" >Contact</a></li>
        </ul>
        </div>}

        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3BottomRightIcon className='text-black h-6 w-10px'/></button>

        </header>
  )
}

export default Navbar
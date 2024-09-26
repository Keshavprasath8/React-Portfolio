// import React from 'react'
// import { FaGithub,FaLinkedin } from "react-icons/fa6";
// import { BiLogoNetlify } from "react-icons/bi";

// function Hero() {
//   return (
//     <div className="home px-6 py-32 h-screen bg-gradient-to-r from-purple-500 to-pink-500">
//       <div className='md:w-1/2 flex flex-col'>
//       <h3 className="text-4xl text-white font-semibold ">Hello,<span>I'm</span></h3>
//       <h1 className="text-3xl mt-2.5 font-medium">Keshav <span className='text-black'>prasath</span></h1>
//       <p className=" text-lg mt-3">
//         I'm a dedicated Frontend Developer with a passion for crafting visually appealing and highly functional web pages. 
//         With expertise in HTML, CSS, JavaScript, and React, 
//         I transform ideas into interactive and responsive websites that users love.
//       </p>
//       </div>
//       <button className="btn btn-primary mt-3">Contact Me</button>
//       <div className='flex py-5'>
//         <a href="#" className='pr-4 hover:text-white'><FaGithub size={30}/></a> 
//         <a href="#" className='pr-4 hover:text-white'><FaLinkedin size={30} /></a>
//         <a href="#" className='hover:text-white'><BiLogoNetlify size={30}/></a>
//       </div>
//     </div>
//   )
// }

// export default Hero


{/* <div
className="hero min-h-screen"
>
{/* <div className="hero-overlay"></div> 
<div className="hero-content text-neutral-content text-center">
  <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    <p className="mb-5">
      I'm a dedicated Frontend Developer with a passion for crafting visually appealing and highly functional web pages. With expertise in HTML, CSS, JavaScript, and React, I transform ideas into interactive and responsive websites that users love. My work not only meets the technical requirements but also focuses on delivering a seamless user experience, ensuring that clients are consistently satisfied with the end result.
    </p>
    <button className="btn btn-primary">Get Started</button>
  </div>
</div>
</div> */}


import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";


function Hero({ name, title, description, githubLink, linkedinLink, netlifyLink }) {
  return (
    <div className="home flex flex-col  md:flex-row px-6 pt-40 h-screen bg-white " id='home'>
      <div>
      <div className='md:w-full flex flex-col'>
        <h3 className="text-5xl text-black font-semibold">Hello,<span className='text-indigo-700'> I'm</span></h3>
        <h1 className="text-4xl mt-2.5 font-medium text-indigo-700">{name} <span className='text-black'>{title}</span></h1>
        <p className="text-lg mt-3">{description}</p>
      </div>
      <a className="btn btn-primary mt-3" href='#contact' >Contact Me</a>
      <div className='flex py-5'>
        <a href={githubLink} className='pr-4 hover:text-indigo-600'><FaGithub size={30}/></a> 
        <a href={linkedinLink} className='pr-4 hover:text-indigo-600'><FaLinkedin size={30} /></a>
        <a href={netlifyLink} className='hover:text-indigo-600'><BiLogoNetlify size={30}/></a>
      </div>
      </div>
      <div  className='w-80 ml-28 md:w-full rounded-lg'>
        <img className='rounded-full'src="https://cdn.dribbble.com/users/214929/screenshots/4366947/dribbble-shot_6.gif" alt="" />
      </div>
    </div>
  )
}

export default Hero;

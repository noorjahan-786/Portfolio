import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../assets/NK-logo.png";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-[#d3d3d3] ">
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 order-2 md:order-1'>
              {/* <MatterEffect /> */}
              <section className="relative z-10 text-white"> {/* Your other content here */}</section>

                <span className='text-xl'>Welcome in My Feed</span>
                <div className=' flex space-x-1 text-2xl md:text-4xl'>
                  <h1>Hello, I'm a</h1>
                {/* <h1 className='text-2xl md:text-4xl'>Hello, I'm a <span className='text-red-600 font bold'>Developer|</span></h1> */}

                  <ReactTyped
                    className='text-red-600 font bold'
                    strings={[" Developer","Programmer","Creative Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
               <br/>
               <p className='text-sm md:text-sm text-justify'>I build beautiful, responsive websites that feel as good as they look. 
                From clean layouts to smooth interactions, I love turning ideas into reality with code.
               </p>
                <br/>
                <div className='flex flex-col md:flex-row justify-between space-y-4 items-center md:y-0 ' >
                  <div className=''>
                  <h1>Available on</h1>
                  <ul className='flex space-x-10 '>
                    <a href='https://www.linkedin.com/in/noorjahan-khatoon-80ab06250' target='_blank'>
                     <li>
                        <FaLinkedin className='text-2xl cursor-pointer' />
                      </li> 
                    </a>
                    <a href='https://github.com/noorjahan-786?tab=repositories' target='_blank'>
                      <li>
                        <FaGithub className='text-2xl cursor-pointer' />
                      </li>
                    </a>
                  </ul>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='font-bold'>Currently working on</h1>
                    <div className='flex space-x-4'>
                      <FaHtml5 className='text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px]' />
                      <FaCss3 className='text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px]' />
                      <IoLogoJavascript className='text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px]' />
                      <FaReact className='text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px]'/>
                    </div>
                </div>
              </div>
              <br/>
              <div className='flex justify-center items-center'>
                    <a  href='./noor-updatedCV.pdf' target='_blank' className='bg-gradient-to-br from-blue-400 to-blue-900 inline-block py-3 px-8 text-white rounded-full text-lg font-bold transition duration-300 transform hover:scale-105'
                    style={{
                      
                      boxShadow:'0 0 1px #60a5fa, 0 0 1px #3b82f6, 0 0 10px #1e3a8a',
                    }}
                    >Download CV</a>
                    
                  </div>
            </div>
            <div className='flex justify-center items-center md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={pic} className='rounded-full w-100 h-100 md:w-[500px] md:h-[500px]'/> 
            </div>
        </div>
      </div>
      <hr/>  
    </>
  );
}

export default Home
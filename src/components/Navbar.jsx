import React, { useState } from 'react'
import pic from "/src/assets/NK-LOGO.PNG";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


function Navbar() {
  const [menu, setMenu] =useState(false);
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:4,
      text:"Experience"
    },
    {
      id:3,
      text:"Projects"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <>
    <div className='sm:max-w-screen-2xl max-w-screen-xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 z-50 sm:left-0 sm:right-0 bgbg-[#0c0c1d] text-[#d3d3d3]'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'> 
          <img src={pic} alt="" className='h-12 w-12 rounded-full'/>
          <h1 className='font-semibold text-xl cursor-pointer'>Noojaha Khatoon
          <p className='text-sm'>Wev Developer</p>
          </h1>
        </div>
      <div >
        <ul className='hidden md:flex space-x-8'>
          {navItems.map(({id,text}) => (
            <li className='hover:scale-105 cursor-pointer' 
            key={id}>
            <Link to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            >{text}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setMenu(!menu)} className='md:hidden'>
          {menu?  <RxCross2 size={24}/> :<IoMdMenu size={24} />}
        </div>
      </div>
      </div>
      {/* mobile navbar */}
      {menu && (
      <div>
        <ul className='bg-white text-gray-700 md:hidden flex flex-col h-screen w-2/3 items-center justify-center space-y-3 text-xl'>
          {navItems.map(({id,text}) => (
            <li className='hover:scale-105 cursor-pointer font-semibold' 
            key={id}>
            <Link to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            >{text}</Link></li>
          ))}
        </ul>
        </div>
      )}
    </div>
    </>
  )
}

export default Navbar
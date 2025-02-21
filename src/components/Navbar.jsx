import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <nav className='bg-white  sticky top-0 w-full z-10'>
        <div className='  flex justify-between h-20 px-4 py-3 '>
          <div className=' flex items-center gap-2     '>
            <i className=" text-3xl text-black ri-blogger-fill"></i>
            <Link to="/" className=' text-2xl font-semibold  text-black ' >My Blog</Link>
          </div>


          <div className=" hidden md:flex items-center gap-6">
            <Link to="/" className=' hover:text-gray-600' >Home</Link>
            <Link to="/blog " className='hover:text-gray-500'>Blog</Link>
            <Link to="/contact" className='hover:text-gray-600' >Contact</Link>
            <Link to="/about" className='hover:text-gray-600'>About us</Link>
          </div>

          <div className=' hidden md:flex items-center gap-4'>
            <Link to="/login" className='hover:text-gray-600'>Log in</Link>
            <Link to="/signup" className='bg-black text-white p-2 px-4 rounded-lg'> Sign up</Link>
          </div>

          <button className="md:hidden text-2xl" onClick={() => setIsopen(!isopen)}>
            {
              isopen ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-line"></i>
              )
            }
          </button>
          {isopen && (
            
            <div className='md:hidden bg-white flex flex-col items-center py-4'>
              <Link to="/" className='py-2 text-black' onClick={() => setIsopen(false)} >Home</Link>
              <Link to="/blog " className='py-2 text-black' onClick={() => setIsopen(false)}>Blog</Link>
              <Link to="/contact" className='py-2 text-black' onClick={() => setIsopen(false)} >Contact</Link>
              <Link to="/about" className='py-2 text-black' onClick={() => setIsopen(false)}>About us</Link>
              <Link to="/login" className='py-2 text-black' onClick={() => setIsopen(false)}>Log in</Link>
              <Link to="/signup" className='bg-black text-white p-2 px-4 rounded-lg' onClick={() => setIsopen(false)}> Sign up</Link>

            </div>
          )}

        </div>
      </nav>
    </>
  )
}

export default Navbar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/newlogo.png'
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 w-full z-10 shadow-md">
      <div className="flex justify-between items-center h-20 px-4 sm:px-6">
    
        <div className="flex items-center gap-2">
        
          <Link to="/" className=" flex text-2xl  font-semibold text-black">
          <img className=" h-16 rounded-full " src={logo} alt="" />
          <span className="py-4 text-orange-500 text-2xl">Blog</span><span className="py-4">verse</span>
          </Link>
        </div>
 
       
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/blog" className="hover:text-gray-600">Blog</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          <Link to="/about" className="hover:text-gray-600">About us</Link>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="hover:text-gray-600">Log in</Link>
          <Link to="/signup" className="bg-black text-white py-2 px-4 rounded-lg">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsopen(!isopen)}>
          {isopen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </div>

      {/* Mobile Menu (Fullscreen for small screens) */}
      {isopen && (
        <div className="md:hidden flex flex-col items-center bg-white w-full py-6 shadow-lg absolute left-0 top-20">
          <Link to="/" className="py-3 text-black w-full text-center text-lg" onClick={() => setIsopen(false)}>
            Home
          </Link>
          <Link to="/blog" className="py-3 text-black w-full text-center text-lg" onClick={() => setIsopen(false)}>
            Blog
          </Link>
          <Link to="/contact" className="py-3 text-black w-full text-center text-lg" onClick={() => setIsopen(false)}>
            Contact
          </Link>
          <Link to="/about" className="py-3 text-black w-full text-center text-lg" onClick={() => setIsopen(false)}>
            About us
          </Link>
          <Link to="/login" className="py-3 text-black w-full text-center text-lg" onClick={() => setIsopen(false)}>
            Log in
          </Link>
          <Link to="/signup" className="bg-black text-white py-3 px-4 w-[80%] text-center rounded-lg" onClick={() => setIsopen(false)}>
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

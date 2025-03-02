import React from "react";
import companies from "./js/list";
import logo from '../assets/newlogo.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-black text-white w-full p-6">
      <h2 className="text-center font-semibold mb-3">
        Let's get started on Something great
      </h2>
      <p className="text-center mb-4">
        Join over 4,000+ startups already growing with Blogverse
      </p>


      <div className="flex justify-center gap-4 mb-6">
        <button className="border-2 border-white font-semibold px-4 py-2 rounded-lg ">Chat to us</button>
        <button className="bg-gray-600 text-black font-semibold px-4 py-2 rounded-lg border-2 border-white">Get started</button>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
        {Object.keys(companies).map((groupKey, index) => (
          <div className="gap-2" key={index}>
            <h3 className="text-lg font-semibold mb-2"> </h3>
            <ul >
              {companies[groupKey].map((company) => (
                <li key={company.id} className="text-sm ">
                  {company.company}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">

        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center text-2xl font-semibold text-black">
            <img className="h-12 md:h-16 rounded-full" src={logo} alt="Blogverse Logo" />
            <span className="py-2 text-orange-500 text-2xl">Blog</span>
            <span className="text-white py-2">verse</span>
          </Link>
        </div>


        <div className="text-white text-center md:text-right">
          <span className="font-semibold px-2">© 2025</span> Blogverse UI. All rights reserved.
        </div>
      </div>

    </div>
  );
};

export default Footer;

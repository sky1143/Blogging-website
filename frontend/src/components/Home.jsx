import React, { useState } from "react";
import Blog from "./Blog";
import { slidePosts } from "./js/list";

const Home = () => {
  const [openImage, setOpenImage] = useState(false);


  return (
    <div>
      <div className="hero section flex flex-col items-center w-full h-full p-4">{slidePosts.map((post) => (
  <div key={post.id} className="relative">
   
    <img
      className="object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-3xl"
      src={post.image}
      alt="Aircraft Landing"
    />

   
    <div className="absolute bottom-0 left-0 w-full text-white p-4 sm:p-6 md:p-8 lg:p-10 bg-black/40 rounded-b-3xl text-center">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {post.title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-2xl">{post.description}</p>
    </div>

  
    <div className="absolute inset-y-0 right-5 flex items-center text-white p-4">
      <button
        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
        onClick={() => setOpenImage(true)}
      >
        <h5>
          <i className="text-3xl ri-arrow-right-line"></i>
        </h5>
      </button>
    </div>
  </div>
))}

      </div>
      
      <Blog />
    </div>
  );
};

export default Home;

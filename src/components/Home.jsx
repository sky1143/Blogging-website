import React, { useState } from "react";

const Home = () => {
  const [openImage, setOpenImage] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      {/* Image & Content Wrapper */}
      <div className="relative flex w-full justify-center">
        {/* Image */}
        <img
          className="object-cover w-auto h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] px-4 py-2 rounded-3xl sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-full"
          src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Aircraft Landing"
        />

        {/* Text Content (Always at the Bottom) */}
        <div className="absolute bottom-0 left-0 w-full text-white  p-4 sm:p-6 md:p-8 lg:p-10 rounded-b-3xl text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Accidental Plane!
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            This is an Aircraft Landing in the Woods
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur
           Reiciendis dolore dolorum sapiente
          </p>
        </div>
     

      {/* Button */}
      <div className="absolute bottom-1/2 flex right-5  transform translate-y-1/2 items-center text-white p-4">
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
    </div>
  );
};

export default Home;


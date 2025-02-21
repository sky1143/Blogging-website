import React, { useState } from 'react'

const Home = () => {

  const [openImage, setOpenImage] = useState(false)
  return (
  <>

<div>
    <div className='flex w-full  justify-center  '>
      <img className='w-[90%]   object-contain  px-4 py-2  rounded-3xl' 
      src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       alt="" />
      {/* <img src="https://unsplash.com/photos/a-bunch-of-pink-donuts-are-stacked-on-top-of-each-other-obyYZVKwCNI" alt="" /> */}
      </div>
      <div className='flex w-full  justify-end '>

     
      <button className='absolute  top-40 -right-5 text-white' onClick={() => {
        setOpenImage(true);
      }}>
        <h5 className=' text-4xl font-semibold  px-20'><i className="  text-3xl ri-arrow-right-line"></i></h5>
      </button>
      </div>
      <div className= 'flex w-full  justify-center text-white gap-2 bg-red-600 '>
        <h1 className='text-lg  font-semibold  px-20 '>Accidental Plane!</h1>
        <h2 className='text-lg font-semibold px-20 '>This is airCraft Landing in the Woods</h2>
        <p className=' '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolore dolorum sapiente accusamus illum harum vero blanditiis doloremque? Perspiciatis aliquid est itaque laudantium perferendis ipsum facilis iste quidem quod officia. Architecto doloremque nihil sed?</p>

      </div>
    
    </div>
    
    </>
  )
}

export default Home
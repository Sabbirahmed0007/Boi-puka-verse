import React from 'react'
import bannerImg from '../../../assets/banner.png'

function Banner() {
  return (
      <div className='p-10 box-border shadow-2xl'>
          <div className='flex flex-col-reverse md:flex-row items-center justify-center font-playfair'>
              {/* Left side of the Banner */}
              <div className='md:w-3/5 '>
                  <h1 className='text-2xl lg:text-5xl font-semibold text-center lg:text-left tracking-wide py-3'>Books to freshen up <br />your bookshelf</h1>
                  <div className=' text-center md:text-left'>
                      <button className='p-2 my-4 font-semibold rounded-md bg-[#23BE0A]'>View The List</button>
                  </div>
              </div>

              {/* Right side of the banner */}
              <div className=' '>
                  <img className='w-full object-cover' src={bannerImg } alt="" />
              </div>

          </div>
    </div>
  )
}

export default Banner
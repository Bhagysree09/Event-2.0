import React from 'react'
import { ReactTyped } from 'react-typed'

function Banner() {
  return (
    <div className='bg-slate-900 h-screen w-full py-[100px]'>

      <div className='max-w-[1240px] mx-auto text-center  my-[100px]'>
        <div className='text-xl md:text-3xl text-white font-bold mb-2'>
          DREAM MAKER
        </div>

        <h2 className='text-3xl md:text-6xl text-slate-300 font-bold md:p-[24px]'>
        We believe that it is all about the BIG DREAMS.
        </h2>

        <div className='text-xl md:text-5xl font-bold md:p-[24px] text-gray-400 ' >
          Book For
<ReactTyped
className='pl-3 text-white'
strings={["Wedding", "Birthday", "Anniversary", "camping","Engagement"]}

typeSpeed={120}
loop={true}
backSpeed={120}
/>
</div>

<button className='p-3 mt-4 rounded-lg md:text-xl text-2xl bg-white text-black'>Get Started</button>
          



    



        </div>

      
    </div>
  )
}

export default Banner

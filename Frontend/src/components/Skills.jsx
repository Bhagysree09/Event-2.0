import React, { useContext } from 'react'

function Skills() {
  return (
    <div className='bg-gray-600 py-10  md:mt-72'>
      <div className='max-w-[1240px] md:flex mx-auto justify-between py-20'>
        <div className='m-2'>
           <h1 className='text-2xl font-bold md:text-5xl '> Want to learn I.T skills?</h1>
           <span className='font-bold text-xl text-white'> signup or Newsletter and stay up to date ... </span>
        </div>
        <div className='m-2'>
          <input type='text' 
          className='p-3 mr-2 text-center rounded-md w-[60%]'
          placeholder='Enter your mail'></input>
          <button className='md:text-lg text-sm bg-black text-white p-2 mt-3 rounded-lg'>Click Here</button>
          <h3 className=' font-bold text-lg mt-5 text-white '>
            We care about your details..
          </h3>
          <a href='#' className='underline font-extrabold text-white'>Privacy policy and details</a>
        </div>
      </div>
    </div>
  )
}

export default Skills

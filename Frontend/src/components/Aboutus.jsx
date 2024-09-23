import React from 'react'
import girl from '../assets/Girl1.jpg'
function Aboutus() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2 h-52'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={girl} className='inline' />
        </div>
      <div className='col-span-1 flex flex-col mt-5 mx-4'>
        <h4 className='font-bold text-2xl pt-4 md:pt-3'>Learn from Experts</h4>
        <p className='font-mono my-4'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

        </p>
        
        <button>About us</button>
      </div>
    </div>
  )
}

export default Aboutus

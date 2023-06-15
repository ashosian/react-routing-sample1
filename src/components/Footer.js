import React from 'react'

const Footer = () => {
  return (
    <div className='bg-purple-700 h-[10vh] grid grid-cols-3'>
      <div className="item1 flex justify-end items-center col-span-2">
        <p className='px-5'>Welcome to our 24 hour service restaurant</p>
        <i class="fa-solid fa-face-smile fa-2x"></i>
      </div>
      <div className="item2 flex justify-end items-center">
        <i class="fa-brands fa-facebook fa-2x px-2"></i>
        <i class="fa-brands fa-twitter fa-2x px-2"></i>
        <i class="fa-brands fa-instagram fa-2x px-2"></i>
      </div>
    </div>
  )
}

export default Footer

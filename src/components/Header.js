import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-black text-white flex h-[10vh] items-center'>
      <NavLink className='p-5' to='/'>Home</NavLink>
      <NavLink className='p-5' to='/about'>About</NavLink>
      <NavLink className='p-5' to='/Contact'>Contact</NavLink>
    </header>

  )
}

export default Header

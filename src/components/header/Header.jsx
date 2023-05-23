/* eslint-disable jsx-quotes */
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import NavBar from '../navbar/Navbar';
import logoSma from '../../assets/img/logo-csma_1.png';
import logoLav from '../../assets/img/logo-jardin.png';

const Header = () => (
  <header className='bg-white'>
    <div className='flex justify-between px-3 bg-gray-700 text-white py-2 shadow-xl gap-2'>
      <button className='bg-[#009245] py-1 px-5 rounded text-[10px] sm:text-base hover:bg-white hover:text-[#009245]' type='button'>Solicitar Entrevista</button>
      <div className='gap-7 text-gray-300 text-xs sm:flex sm:text-base'>
        <div className='flex items-center gap-1'>
          <BsFillTelephoneFill />
          4455-5400
        </div>
        <div className='flex items-center gap-1'>
          <MdEmail className='' />
          colegiosmarcangel@hotmail.com
        </div>
      </div>
    </div>
    <div className='flex items-center justify-around sm:justify-center sm:gap-[200px] py-3'>
      <img className='w-[100px] sm:w-[200px] h-auto' src={logoSma} alt='Logo colegio' />
      <img className='w-[100px] sm:w-[200px] h-auto' src={logoLav} alt='Logo jardin' />
    </div>
    <NavBar />
  </header>
);

export default Header;

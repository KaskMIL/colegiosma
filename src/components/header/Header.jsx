/* eslint-disable jsx-quotes */
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import NavBar from '../navbar/Navbar';
import logoSma from '../../assets/img/logo-escudo-sma.png';
import logoLav from '../../assets/img/logo-escudo-lav.png';

const Header = () => (
  <header className='bg-white'>
    <div className='flex justify-between px-3 bg-gray-700 text-white py-2 shadow-xl gap-2'>
      <button className='bg-[#009245] py-1 px-5 rounded text-[10px] sm:text-base' type='button'>Solicitar Entrevista</button>
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
    <div className='flex items-center justify-around pt-5'>
      <img className='h-auto' src={logoSma} alt='Logo colegio' />
      <img src={logoLav} alt='Logo jardin' />
    </div>
    <NavBar />
  </header>
);

export default Header;

/* eslint-disable jsx-quotes */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-white shadow'>
      <div className='px-4 mx-auto lg:max-w-7xl md:px-8'>
        <div className='md:hidden flex justify-end'>
          <button
            className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
            type='button'
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <GrClose /> : <FaBars />}
          </button>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center py-[1px] md:block ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className={`navbar ${navbar ? null : 'mx-[100px]'}`}>
            <li className='nav-hov text-white hover:scale-120 bree-font'>
              Inicio
            </li>
            <li className='nav-hov text-white hover:scale-120 bree-font'>
              Historia
            </li>
            <li className='nav-hov text-white hover:scale-120 bree-font'>
              Contacto
            </li>
            {/*
            <li className='nav-hov text-gray-600 hover:text-blue-600 bree-font'>Contacto</li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

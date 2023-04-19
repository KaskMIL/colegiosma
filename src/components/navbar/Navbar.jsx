/* eslint-disable jsx-quotes */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-white shadow'>
      <div className='px-4 mx-auto lg:max-w-7xl md:px-8'>
        <div className='flex items-center justify-between py-2 w-full md:py-5 md:block'>
          <h2 className='text-2xl font-bold md:bg-purple-300 md:flex md:justify-center md:py-10'>LOGO</h2>
          <div className='md:hidden'>
            <button
              className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
              type='button'
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <GrClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center py-[1px] md:block ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className='flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-6 md:space-y-0'>
            <li className='nav-hov text-gray-600 hover:text-blue-600 bree-font'>Inicio</li>
            <li className='nav-hov text-gray-600 hover:text-blue-600 bree-font'>Niveles</li>
            <li className='nav-hov text-gray-600 hover:text-blue-600 bree-font'>Propuesta</li>
            <li className='nav-hov text-gray-600 hover:text-blue-600 bree-font'>Contacto</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

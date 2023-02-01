/* eslint-disable jsx-quotes */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-white shadow'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <h2 className='text-2xl font-bold'>LOGO</h2>
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-gray-600 hover:text-blue-600'>Home</li>
              <li className='text-gray-600 hover:text-blue-600'>Blog</li>
              <li className='text-gray-600 hover:text-blue-600'>About US</li>
              <li className='text-gray-600 hover:text-blue-600'>Contact US</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

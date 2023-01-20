import React from 'react';

const Header = () => (
  <header className="text-purple-500 text-4xl flex items-end justify-between px-[100px]">
    <div>
      <img src="http://via.placeholder.com/550x250" alt="Placeholder" />
    </div>
    <nav>
      <ul className="flex gap-5 font-bold text-[30px]">
        <li className="nav-hov">Nosotros</li>
        <li className="nav-hov">Propuesta</li>
        <li className="nav-hov">Niveles</li>
        <li className="nav-hov">Contacto</li>
      </ul>
    </nav>
  </header>
);

export default Header;

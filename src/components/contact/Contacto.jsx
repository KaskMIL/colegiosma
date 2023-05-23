import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapComp from '../map/Map';

const Contacto = () => (
  <section className="flex flex-col items-center pt-5 md:py-5 bg-white">
    <h2 className="bree-font text-xl md:text-5xl tracking-[0.1rem] font-bold mb-5">Solicitá tu entrevista!</h2>
    <ul className="flex justify-around w-full bg-slate-600 text-white py-5 mb-5 md:text-xl">
      <li className="flex gap-2 items-center">
        <BsFillTelephoneFill />
        <a href="tel:44555400">4455-5400</a>
      </li>
      <li className="flex gap-2 items-center">
        <FaMapMarkerAlt />
        San Jose 5290, San Miguel
      </li>
    </ul>
    <MapComp />
  </section>
);

export default Contacto;

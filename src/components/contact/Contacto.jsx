import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapComp from '../map/Map';

const Contacto = () => (
  <section className="flex flex-col items-center py-5 bg-purple-400">
    <h2>Solicitá tu entrevista!</h2>
    <ul className="flex justify-around w-full pb-5">
      <li className="flex gap-2 items-center">
        <BsFillTelephoneFill />
        4455-5400
      </li>
      <li className="flex gap-2 items-center">
        <FaMapMarkerAlt />
        San Jose 5290
      </li>
    </ul>
    <MapComp />
  </section>
);

export default Contacto;

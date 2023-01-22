import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { MdSportsSoccer } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { GiMaterialsScience } from 'react-icons/gi';

const Competitions = () => (
  <section className="bg-green-400 text-center">
    <h1>Competitions</h1>
    <div className="bg-gray-400 flex justify-center items-center">
      <div className="flex flex-wrap bg-yellow-400">
        <div className="comp-icons">
          <GrLanguage />
          <h2>Ingles</h2>
        </div>
        <div className="comp-icons">
          <RiComputerLine />
          <h2>Computación</h2>
        </div>
        <div className="comp-icons">
          <MdSportsSoccer />
          <h2>Actividades Deportivas</h2>
        </div>
        <div className="comp-icons">
          <GiMaterialsScience />
          <h2>Taller de Ciencias</h2>
        </div>
      </div>
    </div>
  </section>
);

export default Competitions;

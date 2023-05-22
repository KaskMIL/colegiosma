import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { MdSportsSoccer } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { GiMaterialsScience } from 'react-icons/gi';
import study from '../../assets/img/study-child.jpeg';
import computer from '../../assets/img/computer-lab.jpeg';
import sport from '../../assets/img/volley-img.jpeg';
import science from '../../assets/img/map-science.jpeg';

const Competitions = () => (
  <section className="bg-green-400 text-center">
    <h1>Competitions</h1>
    <div className="bg-gray-400 flex justify-center items-center">
      <div className="flex flex-wrap bg-yellow-400">
        <div className="comp-icons">
          <img src={study} alt="child studing" height={300} width={200} />
          <GrLanguage />
          {/* <h2>Ingles</h2> */}
        </div>
        <div className="comp-icons">
          <img src={computer} alt="child studing" height={300} width={200} />
          <RiComputerLine />
          {/* <h2>Computación</h2> */}
        </div>
        <div className="comp-icons">
          <img src={sport} alt="child studing" height={300} width={200} />
          <MdSportsSoccer />
          {/* <h2>Actividades Deportivas</h2> */}
        </div>
        <div className="comp-icons">
          <img src={science} alt="child studing" height={300} width={200} />
          <GiMaterialsScience />
          {/* <h2>Taller de Ciencias</h2> */}
        </div>
      </div>
    </div>
  </section>
);

export default Competitions;

/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import logoPrimaria from '../../assets/img/escudo-prim-black.png';
import logoSec from '../../assets/img/escudo-sec-black.png';
import logoJardin from '../../assets/img/logo-jardin.png';

const Tab = () => {
  const [jardin, setJardin] = useState(true);
  const [primaria, setPrimaria] = useState(false);
  const [secundaria, setSecundaria] = useState(false);

  const handleJardin = () => {
    if (!jardin) {
      if (primaria) {
        setPrimaria(!primaria);
      } else if (secundaria) {
        setSecundaria(!secundaria);
      }
      setJardin(!jardin);
    }
    return 1;
  };

  const handlePrimaria = () => {
    if (!primaria) {
      if (jardin) {
        setJardin(!jardin);
      } else if (secundaria) {
        setSecundaria(!secundaria);
      }
      setPrimaria(!primaria);
    }
    return 1;
  };

  const handleSecundaria = () => {
    if (!secundaria) {
      if (jardin) {
        setJardin(!jardin);
      } else if (primaria) {
        setPrimaria(!primaria);
      }
      setSecundaria(!secundaria);
    }
    return 1;
  };

  return (
    <section className='px-4 py-[30px] bg-gray-600'>
      {/* Inician links */}
      <div className='flex'>
        <button
          type='button'
          className={`tab-nav-neutral ${
            jardin ? 'tab-nav-active' : 'tab-nav-inactive'
          }`}
          onClick={handleJardin}
        >
          <img src={logoJardin} className='tab-nav-img' alt='logo jardin' />
          Inicial
        </button>
        <button
          type='button'
          className={`tab-nav-neutral ${
            primaria ? 'tab-nav-active' : 'tab-nav-inactive'
          }`}
          onClick={handlePrimaria}
        >
          <img src={logoPrimaria} className='tab-nav-img' alt='logo colegio' />
          Primaria
        </button>
        <button
          type='button'
          className={`tab-nav-neutral ${
            secundaria ? 'tab-nav-active' : 'tab-nav-inactive'
          }`}
          onClick={handleSecundaria}
        >
          <img src={logoSec} className='tab-nav-img' alt='logo colegio' />
          Secundaria
        </button>
      </div>
      {/* Inician tabs */}
      <article>
        <section className={`tab-sec-bg ${jardin ? 'block' : 'hidden'}`}>
          <h2 className='tab-title'>
            <span className='font-thin'>Jardin de Infantes</span>
            <br />
            La Alpina Verde
          </h2>
          <div className='flex'>
            <ul className='tab-ul'>
              <li className='p-3'>
                <p className='tab-p'>
                  Nuestra propuesta educativa destaca la importancia del
                  desarrollo de competencias que nos caracteriza como seres
                  humanos, fomentando el deseo de aprender, el ansia de conocer y
                  mediante estas herramentas acceder a una educacion para toda la
                  vida.
                </p>
              </li>
              <li className='p-3'>
                <p className='tab-p'>
                  El objetivo institucional es que nuestros estudiantes egresen
                  como jovenes comprometidas con la resalidad social, solidarios,
                  tolerantes, formados para continuar sus estudios superiores o
                  insertarse en el hambiente laboral, encuadrado en la formacion
                  de valores individuales y sociales significativos para lograr
                  una sociedad mas justa, mas equitativa y solidaria.
                </p>
              </li>
            </ul>
            <div className='justify-center flex-auto hidden sm:flex'>
              <img src={logoJardin} className='w-[200px] h-[200px]' alt="Logo primaria" />
            </div>
          </div>
        </section>
        <section className={`tab-sec-bg ${primaria ? 'block' : 'hidden'}`}>
          <h2 className='tab-title'>
            <span className='font-thin'>Colegio Primario</span>
            <br />
            San Miguel Arcángel
          </h2>
          <div className='flex'>
            <ul className='tab-ul'>
              <li className='p-3'>
                <p className='tab-p'>
                  Nuestra propuesta educativa destaca la importancia del
                  desarrollo de competencias que nos caracteriza como seres
                  humanos, fomentando el deseo de aprender, el ansia de conocer y
                  mediante estas herramentas acceder a una educacion para toda la
                  vida.
                </p>
              </li>
              <li className='p-3'>
                <p className='tab-p'>
                  El objetivo institucional es que nuestros estudiantes egresen
                  como jovenes comprometidas con la resalidad social, solidarios,
                  tolerantes, formados para continuar sus estudios superiores o
                  insertarse en el hambiente laboral, encuadrado en la formacion
                  de valores individuales y sociales significativos para lograr
                  una sociedad mas justa, mas equitativa y solidaria.
                </p>
              </li>
            </ul>
            <div className='justify-center flex-auto hidden sm:flex'>
              <img src={logoPrimaria} className='w-[200px] h-[200px]' alt="Logo primaria" />
            </div>
          </div>
        </section>
        <section className={`tab-sec-bg ${secundaria ? 'block' : 'hidden'}`}>
          <h2 className='tab-title'>
            <span className='font-thin'>Colegio Secundario</span>
            <br />
            San Miguel Arcángel
          </h2>
          <div className='flex'>
            <ul className='tab-ul'>
              <li className='p-3'>
                <p className='tab-p'>
                  Nuestra propuesta educativa destaca la importancia del
                  desarrollo de competencias que nos caracteriza como seres
                  humanos, fomentando el deseo de aprender, el ansia de conocer y
                  mediante estas herramentas acceder a una educacion para toda la
                  vida.
                </p>
              </li>
              <li className='p-3'>
                <p className='tab-p'>
                  El objetivo institucional es que nuestros estudiantes egresen
                  como jovenes comprometidas con la resalidad social, solidarios,
                  tolerantes, formados para continuar sus estudios superiores o
                  insertarse en el hambiente laboral, encuadrado en la formacion
                  de valores individuales y sociales significativos para lograr
                  una sociedad mas justa, mas equitativa y solidaria.
                </p>
              </li>
            </ul>
            <div className='justify-center flex-auto hidden sm:flex'>
              <img src={logoSec} className='w-[200px] h-[200px]' alt="Logo primaria" />
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Tab;

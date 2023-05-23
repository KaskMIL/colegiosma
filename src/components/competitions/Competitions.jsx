import React, { useState } from 'react';

const Competitions = () => {
  const [ingles, setIngles] = useState(false);
  const [computacion, setComputacion] = useState(false);
  const [taller, setTaller] = useState(false);
  const [convivencia, setConvivencia] = useState(false);

  return (
    <section className="text-center h-screen bg-gray-600">
      <article
        className="grid grid-cols-1 md:grid-cols-2 h-screen p-5"
      >
        <div
          className="competitions"
          onMouseEnter={() => setIngles(true)}
          onMouseLeave={() => setIngles(false)}
        >
          <div className="w-full h-full bg-green-600 flex justify-center items-center">
            <h2 className="">Ingles</h2>
          </div>
          {
            ingles ? (
              <div className="absolute bg-gray-400 bottom-0 left-0 h-full w-full">
                Something
              </div>
            ) : null
          }
        </div>
        <div
          className="competitions"
          onMouseEnter={() => setComputacion(true)}
          onMouseLeave={() => setComputacion(false)}
        >
          <div className="w-full h-full bg-red-600 flex justify-center items-center">
            <h2 className="">Computacion</h2>
          </div>
          {
            computacion ? (
              <div className="absolute bg-gray-400 bottom-0 left-0 h-full w-full">
                Something
              </div>
            ) : null
          }
        </div>
        <div
          className="competitions"
          onMouseEnter={() => setTaller(true)}
          onMouseLeave={() => setTaller(false)}
        >
          <div className="w-full h-full bg-blue-600 flex justify-center items-center">
            <h2 className="">Talleres</h2>
          </div>
          {
            taller ? (
              <div className="absolute bg-gray-400 bottom-0 left-0 h-full w-full">
                Something
              </div>
            ) : null
          }
        </div>
        <div
          className="competitions"
          onMouseEnter={() => setConvivencia(true)}
          onMouseLeave={() => setConvivencia(false)}
        >
          <div className="w-full h-full bg-yellow-400 flex justify-center items-center">
            <h2 className="">Convivencia</h2>
          </div>
          {
            convivencia ? (
              <div className="absolute bg-gray-400 h-full w-full">
                Something
              </div>
            ) : null
          }
        </div>
      </article>
    </section>
  );
};

export default Competitions;

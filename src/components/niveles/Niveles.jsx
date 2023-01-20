import React from 'react';

const Niveles = () => (
  <section className="flex md:flex-row flex-col items-center bg-purple-300 justify-around gap-10 p-5">
    <article className="border-[5px] p-5 text-center">
      <h2 className="mb-5 text-white text-3xl font-bold">
        <span className="text-orange-400 text-3xl font-light">01. </span>
        Inicial
      </h2>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta impedit aspernatur ullam explicabo tenetur aliquam modi
        quibusdam quos porro quod molestias, sapiente at, rem,
        magnam optio culpa fugiat blanditiis corporis.
      </p>
    </article>
    <article className="border-[5px] p-5 text-center">
      <h2 className="mb-5 text-white text-3xl font-bold">
        <span className="text-orange-400 text-3xl font-light">02. </span>
        Primario
      </h2>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta impedit aspernatur ullam explicabo tenetur aliquam modi
        quibusdam quos porro quod molestias, sapiente at, rem,
        magnam optio culpa fugiat blanditiis corporis.
      </p>
    </article>
    <article className="border-[5px] p-5 text-center">
      <h2 className="mb-5 text-white text-3xl font-bold">
        <span className="text-orange-400 text-3xl font-light">03. </span>
        Secundario
      </h2>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta impedit aspernatur ullam explicabo tenetur aliquam modi quibusdam
        quos porro quod molestias,
        sapiente at, rem, magnam optio culpa fugiat blanditiis corporis.
      </p>
    </article>
  </section>
);

export default Niveles;

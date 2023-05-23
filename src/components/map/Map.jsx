/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

const render = (status) => (
  <h1>{status}</h1>
);

const Map = () => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: { lat: -34.579884, lng: -58.73818 },
      zoom: 18,
    });
  });

  return (
    <div ref={ref} id="map" className="h-[350px] w-[350px] md:h-[400px] md:w-[800px]" />
  );
};

const MapComp = () => (
  <section className="flex flex-col justify-center items-center bg-slate-200 p-5 shadow-xl">
    <div className="border">
      <Wrapper apiKey={process.env.REACT_APP_MAPS_API} render={render}>
        <Map />
      </Wrapper>
    </div>
  </section>
);

export default MapComp;

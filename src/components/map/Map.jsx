/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const render = (status) => {
  if (status === Status.LOADING) {
    return (
      <h3>
        {status}
        ..
      </h3>
    );
  }
  if (status === Status.FAILURE) {
    return (
      <h3>
        {status}
        ...
      </h3>
    );
  }
  return null;
};

const Map = (center, zoom) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" className="h-screen w-full" />;
};

const MapComp = () => {
  const center = { lat: -34.579884, lng: -58.73818 };
  const zoom = 15;

  return (
    <Wrapper apiKey="AIzaSyCw36mdxRiWa_iMquf3911tXqUT6tm-9yY" render={render}>
      <h2 className="bg-gray-500 text-white font-bold text-center">Map</h2>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default MapComp;

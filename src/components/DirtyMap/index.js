import React from 'react';
import { MapWrapper } from './styles';
import Map from './map';

export const DirtyMap = () => {
  const height = '80vh';

  return (
    <MapWrapper height={height}>
      <Map />
    </MapWrapper>
  );
};

export default DirtyMap;

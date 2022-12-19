import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MapWrapper } from './styles';

export const DataMap = () => {
  const height = '80vh';
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <MapWrapper height={height}>
      <iframe
        width="100%"
        style={{
          position: 'absolute',
          height,
          border: 'none',
          top: '50%',
          transform: 'translateY(-50%)',
          left: isTabletOrMobile && 0
        }}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://experience.arcgis.com/experience/37f9b1ef9236403194d3dbfc803ced00"
      />
    </MapWrapper>
  );
};

export default DataMap;

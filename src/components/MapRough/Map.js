import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import TrashLayer from './TrashLayer';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FiaW5lYWxsb3VzdXJmcmlkZXIiLCJhIjoiY2xnZXY3NWFpMHoyaDNtcDhrYWZscGJ1ZCJ9.I21vKjTW3QIyuwfb19HhDg';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.1); // -1.0
  const [lat, setLat] = useState(46.1); // 43.47
  const [zoom, setZoom] = useState(5); // 14

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
      minZoom: 4,
      pitch: 0,
      bearing: 0
    });

    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('load', () => {
      console.log('Map is loaded.');
      map.current.resize();
    });

    return () => {
      map.current.remove();
    };
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map]);

  const url = `https://api-plastico-prod.azurewebsites.net/v1/geojson/-8.0/33.0/28.0/66.0?entity_type=trash`;
  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      {map.current && <TrashLayer url={url} map={map.current} />}
    </>
  );
};

export default Map;

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import TrashLayer from './TrashLayer';
import { MapWrapper } from './styles';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.1);
  const [lat, setLat] = useState(46.1);
  const [zoom, setZoom] = useState(5);
  const isMapLoaded = useRef(false);

  const url = `https://api-plastico-prod.azurewebsites.net/v1/geojson/-8.0/33.0/28.0/66.0?entity_type=trash`;

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
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
      map.current.resize();
    });

    return () => {
      map.current.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map]);

  return (
    <MapWrapper>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <TrashLayer url={url} map={map.current} />
    </MapWrapper>
  );
};

export default Map;

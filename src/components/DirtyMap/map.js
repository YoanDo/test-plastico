import React, { useEffect, useRef, useState } from 'react';
import { MapWrapper, MapStyle, BoxContainer } from './styles';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@material-ui/core';
import BasicTable from './global-table';
import CircularIndeterminate from './loader';

const useStyles = makeStyles({
  boxContainer: {
    width: '35%',
    height: '100%',
    position: 'absolute',
    color: 'white',
    left: 0,
    zIndex: 1,
    backgroundColor: '#000000ab',
    opacity: 0.8
  },
  height: {
    height: '100%'
  }
});

const DataMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [popup, setPopup] = useState(false);
  const classes = useStyles();
  const [bassinAllLayer, setBassinAllLayer] = useState(true);
  const [bassinLayer, setBassinLayer] = useState(false);
  const [riverLayer, setRiverLayer] = useState(null);
  const [dataProperties, setDataProperties] = useState('');
  const [clikedlayerid, setClikedlayerid] = useState(null);

  let polygonID = null;

  const mapLayer = () => (
    <Box
      sx={{
        width: '20%',
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column',
        fontFamily: 'Lato',
        right: 0,
        backgroundColor: 'white',
        opacity: 1,
        zIndex: 1
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h6">Layers selector</Typography>
      </div>
      <div style={{ display: 'grid' }}>
        <Box sx={{ p: 1 }}>
          <FormGroup>
            <FormControlLabel
              onChange={(e, layer) => {
                setLayer(e, 'bassinAll');
                e.stopPropagation();
              }}
              control={<Checkbox checked={bassinAllLayer ? true : null} />}
              label="bassin All"
            />
            <FormControlLabel
              onChange={(e, layer) => {
                setLayer(e, 'bassin');
                e.stopPropagation();
              }}
              control={<Checkbox checked={bassinLayer ? true : null} />}
              label="bassin"
            />
          </FormGroup>
        </Box>
      </div>
    </Box>
  );
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiY2hvc2Vuc291bHMiLCJhIjoiY2s4ZTlteTN4MTQyZTNocXBqdXluM2c2dCJ9.iGBZLUChDBUlCqyOtDeCaw';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
        center: [2.774962012, 47.566718376],
        zoom: 6
      });

      map.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');
      map.on('load', () => {
        setMap(map);
        loadMap(map);
        map.resize();
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (map) {
      map.on('moveend', () => {
        setTimeout(() => addlayer(map), 3000);
      });
    } else {
      // map.event
    }
  }, [map]);

  const removeFeature = (feature) => {
    map.removeLayer(feature);
    const layer = map.getSource(feature);
    if (layer) {
      map.removeSource(feature);
    }
  };
  const mayRenderLoader = () => {
    if (!riverLayer) {
      return <CircularIndeterminate />;
    }
  };

  const setLayer = (e, layerToDisplay) => {
    switch (layerToDisplay) {
      case 'bassinAll':
        if (e.target.checked) {
          addlayerBassin(map, true);
          setBassinAllLayer(true);
        } else {
          removeFeature('bassin');
          setBassinAllLayer(false);
        }
        return;
      case 'bassin':
        if (e.target.checked) {
          addlayerBassin(map, false);
          setBassinLayer(true);
        } else {
          removeFeature('bassin');
          setBassinLayer(false);
        }

      default:
    }
  };

  /// ///////////////////////////////////////// BASSSINNNNN

  const addlayerBassin = (map, all) => {
    const zoom = map.getZoom();
    // investigate chercher les infos un niveau plus loin pour eviter cassage
    const sw = map.getBounds()._sw;
    const ne = map.getBounds()._ne;
    let url = `http://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/${sw.lng}/${sw.lat}/${ne.lng}/${ne.lat}?entity_type=basin`;
    if (!all) {
      url = `http://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/${sw.lng}/${sw.lat}/${ne.lng}/${ne.lat}?entity_type=basin&min_area=10000`;
    }
    if (zoom < 8 && zoom > 12) {
      return null;
    }
    if (map.getSource('bassin') && map.isSourceLoaded('bassin')) {
      const features = map.querySourceFeatures('bassin');
      removeFeature('bassin');
    } else {
      if (map.getSource('bassin')) {
        return null;
      }
      map.addSource('bassin', {
        type: 'geojson',
        data: url,
        generateId: true,
        maxzoom: 12
      });
      map.addLayer({
        id: 'bassin',
        type: 'line',
        source: 'bassin',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'clicked'], false],
            'red', // if selected true, paint in blue
            'blue' // else paint in gray
          ],
          'line-opacity': 0.5,
          'line-width': 4
        }
      });
    }
  };
  /// ////////////////////country

  // rivvverrrrrr
  const addlayer = (map) => {
    const zoom = map.getZoom();
    const sw = map.getBounds()._sw;
    const ne = map.getBounds()._ne;
    let importance;
    if (zoom <= 6) {
      importance = 1;
    }
    if (zoom > 6 && zoom < 8) {
      importance = 2;
    }
    if (zoom > 8 && zoom < 10) {
      importance = 3;
    }
    if (zoom > 10 && zoom < 12) {
      importance = 4;
    }
    if (zoom > 12) {
      importance = 5;
    }
    setRiverLayer(null);

    if (map.getSource('rivers') && importance) {
      // add data whithout remov
      return axios
        .get(
          `http://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/${sw.lng}/${sw.lat}/${ne.lng}/${ne.lat}?entity_type=river&max_importance=${importance}`
        )
        .then((res) => {
          if (!res.data.features) {
            setRiverLayer('sknxd');
            return;
          }

          const geom = {
            type: 'FeatureCollection',
            features: res.data.features
          };
          if (geom.features === riverLayer?.feature) {
            return null;
          }
          setRiverLayer(geom);
          map.getSource('rivers').setData(geom);
        });
    }
    if (importance) {
      return axios
        .get(
          `http://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/${sw.lng}/${sw.lat}/${ne.lng}/${ne.lat}?entity_type=river&max_importance=${importance}`
        )
        .then((res) => {
          if (!res.data.features) {
            setRiverLayer('sknxd');
            return;
          }
          const geom = {
            type: 'FeatureCollection',
            features: res.data.features
          };
          if (map.getSource('rivers')) {
            return null;
          }
          map.addSource('rivers', {
            type: 'geojson',
            data: geom,
            maxzoom: 15,
            generateId: true
          });
          setRiverLayer(geom);
          map.addLayer({
            id: 'rivers',
            type: 'line',
            source: 'rivers',
            generateId: true,
            layout: {
              'line-cap': 'round',
              'line-join': 'round'
            },

            paint: {
              'line-color': [
                'case',
                ['boolean', ['feature-state', 'clicked'], false],
                // 3 color green orange red
                '#64BDBB', // if selected true, paint in blue
                [
                  'all',
                  ['>', ['get', 'trash_per_km'], 0],
                  ['<', ['get', 'trash_per_km'], 25]
                ],
                'green',
                [
                  'all',
                  ['>=', ['get', 'trash_per_km'], 25],
                  ['<', ['get', 'trash_per_km'], 100]
                ],
                'orange',
                ['>=', ['get', 'trash_per_km'], 100],
                'red',
                'yellow'
              ],
              'line-opacity': 0.7,
              'line-width': 7
            }
          });
          map.setFeatureState(
            {
              source: 'rivers',
              id: polygonID
            },
            {
              clicked: false
            }
          );
        });
    }
  };

  const loadMap = (map) => {
    addlayer(map);
    addlayerBassin(map, true);
    map.on('click', 'bassin', (e) => {
      setDataProperties(e.features[0].properties);
      setPopup(true);
      map.resize();
      const coordinates = e.features[0].geometry.coordinates[0];
      const bounds = coordinates.reduce(
        (bounds, coord) => bounds.extend(coord),
        new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
      );
      map.fitBounds(
        bounds,
        {
          padding: 500
        },
        { source: 'fitBounds' }
      );
      map.fitBounds(
        bounds,
        {
          padding: 100
        },
        { source: 'fitBounds' }
      );
    });
    map.on('click', 'rivers', (e) => {
      setDataProperties(e.features[0].properties);
      map.resize();
      const { coordinates } = e.features[0].geometry;
      if (e.features.length > 0) {
        if (polygonID !== null) {
          map.setFeatureState(
            {
              source: 'rivers',
              id: polygonID
            },
            {
              clicked: false
            }
          );
        }
      }
      polygonID = e.features[0].id;
      // map.setFeatureState(
      //   {
      //     source: "rivers",
      //     id: polygonID,
      //   },
      //   {
      //     clicked: true,
      //   }
      // )
      setClikedlayerid(polygonID);
      setPopup(true);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'rivers', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseenter', 'bassin', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'bassin', () => {
      map.getCanvas().style.cursor = '';
    });
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'rivers', () => {
      map.getCanvas().style.cursor = '';
    });
  };

  return (
    <MapWrapper>
      <MapStyle ref={(el) => (mapContainer.current = el)}>
        {mayRenderLoader()}
        {popup && dataProperties ? (
          <div className={classes.boxContainer}>
            <BasicTable
              data={dataProperties}
              className={classes.height}
              onClose={() => setPopup(false)}
            />
          </div>
        ) : null}
        {mapLayer()}
      </MapStyle>
    </MapWrapper>
  );
};
export default DataMap;

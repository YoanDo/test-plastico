import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';
import heatmapConfig from '../../assets/mapAssets/TrashHeatmapStyle';
import circleConfig from '../../assets/mapAssets/TrashCircleStyle';
import circleHighlightConfig from '../../assets/mapAssets/TrashCircleHighlightStyle';
import circleBackgroundConfig from '../../assets/mapAssets/TrashCircleBackgroundStyle';
import { getTypeName } from '../../assets/mapAssets/TypeId';

const TrashLayer = ({ map, url }) => {
  const [data, loading] = useFetchData(url);

  const addLayers = () => {
    if (!data || !map) return;

    // Adding source
    let source = map.getSource('data');
    if (!source) {
      map.addSource('data', {
        type: 'geojson',
        data
      });
      source = map.getSource('data');
    } else {
      source.setData(data);
    }

    // Adding heatmap layer
    if (!map.getLayer('heatmap_trash')) {
      map.addLayer({
        id: 'heatmap_trash',
        type: 'heatmap',
        source: 'data',
        maxzoom: 17,
        paint: heatmapConfig
      });
    }

    // Adding points layer
    if (!map.getLayer('circle_trash')) {
      map.addLayer({
        id: 'circle_trash',
        type: 'circle',
        source: 'data',
        minzoom: 13,
        layout: { visibility: 'visible' },
        paint: circleConfig
      });
    }

    // Adding a layer that makes non-selected points greyish
    if (!map.getLayer('circle_trash_background')) {
      map.addLayer({
        id: 'circle_trash_background',
        type: 'circle',
        source: 'data',
        minzoom: 13,
        paint: circleBackgroundConfig,
        layout: { visibility: 'none' }
      });
    }

    // Adding a layer that highlights points of the same campaign as the clicked point
    if (!map.getLayer('circle_trash_highlight')) {
      map.addLayer({
        id: 'circle_trash_highlight',
        type: 'circle',
        source: 'data',
        minzoom: 13,
        paint: circleHighlightConfig,
        filter: ['==', 'id_ref_campaign_fk', '']
      });
    }
  };

  const addClickEffects = () => {
    map.on('click', 'circle_trash', (event) => {
      const feature = event.features[0];
      const typeName = getTypeName(feature.properties.type_id);

      new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `
          <strong>ID:</strong> ${feature.properties.id}
          <p><strong>Campaign: </strong>${feature.properties.id_ref_campaign_fk}</p>
          <p><strong>Type: </strong>${typeName}</p>
          <p><strong>Date: </strong>${feature.properties.time}</p>
          <p><strong>River: </strong>${feature.properties.river_name}</p>
        `
        )
        .addTo(map);

      const clickedCampaign = feature.properties.id_ref_campaign_fk;
      if (map.setFilter) {
        map.setFilter('circle_trash_highlight', [
          '==',
          'id_ref_campaign_fk',
          clickedCampaign
        ]);
      }

      if (map.setLayoutProperty) {
        map.setLayoutProperty(
          'circle_trash_background',
          'visibility',
          'visible'
        );
      }
    });
  };

  const removeClickEffects = () => {
    const highlightLayerExists = map.getLayer('circle_trash_highlight');
    if (highlightLayerExists) {
      map.removeLayer('circle_trash_highlight');
      map.removeSource('circle_trash_highlight');
    }

    map.setLayoutProperty('circle_trash_background', 'visibility', 'none');
  };

  useEffect(() => {
    if (loading) return;

    addLayers();
    addClickEffects();

    return () => {
      map.off('click', 'circle_trash');
      removeClickEffects();
    };
  }, [data, loading]);

  return null;
};

export default TrashLayer;

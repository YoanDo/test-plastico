import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';
import heatmapConfig from '../../assets/mapAssets/TrashHeatmapStyle';
import circleConfig from '../../assets/mapAssets/TrashCircleStyle';
import circleHighlightConfig from '../../assets/mapAssets/TrashCircleHighlightStyle';
import circleBackgroundConfig from '../../assets/mapAssets/TrashCircleBackgroundStyle';
import { getTypeName } from '../../assets/mapAssets/TypeId';

const TrashLayer = (props) => {
  const [data] = useFetchData(props.url);

  useEffect(() => {
    if (!data || !props.map) return;

    // Adding or updating the source
    const sourceId = 'data';
    if (!props.map.getSource(sourceId)) {
      props.map.addSource(sourceId, {
        type: 'geojson',
        data
      });
    } else {
      props.map.getSource(sourceId).setData(data);
    }

    // Adding heatmap layer
    const heatmapLayerId = 'heatmap_trash';
    if (!props.map.getLayer(heatmapLayerId)) {
      props.map.addLayer({
        id: heatmapLayerId,
        type: 'heatmap',
        source: sourceId,
        maxzoom: 17,
        paint: heatmapConfig
      });
    }

    // Adding points layer
    const circleLayerId = 'circle_trash';
    if (!props.map.getLayer(circleLayerId)) {
      props.map.addLayer({
        id: circleLayerId,
        type: 'circle',
        source: sourceId,
        minzoom: 13,
        layout: { visibility: 'visible' },
        paint: circleConfig
      });
    }

    // Adding a layer that makes non-selected points greyish
    const circleBackgroundLayerId = 'circle_trash_background';
    if (!props.map.getLayer(circleBackgroundLayerId)) {
      props.map.addLayer({
        id: circleBackgroundLayerId,
        type: 'circle',
        source: sourceId,
        minzoom: 13,
        paint: circleBackgroundConfig,
        layout: { visibility: 'none' }
      });
    }

    // Adding a layer that highlights points of the same campaign as the clicked point
    const circleHighlightLayerId = 'circle_trash_highlight';
    if (!props.map.getLayer(circleHighlightLayerId)) {
      props.map.addLayer({
        id: circleHighlightLayerId,
        type: 'circle',
        source: sourceId,
        minzoom: 13,
        paint: circleHighlightConfig,
        filter: ['==', 'id_ref_campaign_fk', '']
      });
    }

    const removeClickEffects = () => {
      props.map.setFilter(circleHighlightLayerId, [
        '==',
        'id_ref_campaign_fk',
        ''
      ]);
      props.map.setLayoutProperty(
        circleBackgroundLayerId,
        'visibility',
        'none'
      );
    };

    // Adding effects on click
    const onClickCircleTrash = (event) => {
      const feature = event.features[0];
      const typeName = getTypeName(feature.properties.type_id);
      new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<strong>ID:</strong> ${feature.properties.id}
        <p><strong>Campaign: </strong>${feature.properties.id_ref_campaign_fk}</p>
        <p><strong>Type: </strong>${typeName}</p>
        <p><strong>Date: </strong>${feature.properties.time}</p>
        <p><strong>River: </strong>${feature.properties.river_name}</p>
        `
        )
        .addTo(props.map);

      const clickedCampaign = feature.properties.id_ref_campaign_fk;
      props.map.setFilter(circleHighlightLayerId, [
        '==',
        'id_ref_campaign_fk',
        clickedCampaign
      ]);

      props.map.setLayoutProperty(
        circleBackgroundLayerId,
        'visibility',
        'visible'
      );
    };

    props.map.on('click', 'circle_trash', onClickCircleTrash);

    // Removing effects
    return () => {
      props.map.off('click', 'circle_trash', onClickCircleTrash);
      removeClickEffects();
    };
  }, [data, props.map]);

  return null;
};

export default TrashLayer;

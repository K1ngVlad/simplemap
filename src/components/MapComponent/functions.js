import L from 'leaflet';

import { blueIcon, redIcon } from './icons';

const getColor = (feature, municipalitet) => {
  if (feature.properties.municipalitet === municipalitet) {
    return 'red';
  }
  return 'blue';
};

const geoJSONStyle = (feature, municipalitet) => {
  const color = getColor(feature, municipalitet);
  return {
    fillColor: color,
    color: color,
  };
};

const pointToLayer = (feature, latlng, municipalitet) => {
  if (feature.properties.municipalitet === municipalitet) {
    return L.marker(latlng, {
      icon: redIcon,
    });
  }
  return L.marker(latlng, {
    icon: blueIcon,
  });
};

export { geoJSONStyle, pointToLayer };

import L from 'leaflet';

import { iconSize, iconAnchor } from '../../utils';

import blueMarkerIcon from '../../assets/svg/blueMarker.svg';
import redMarkerIcon from '../../assets/svg/redMarker.svg';

const blueIcon = new L.Icon({
  iconUrl: blueMarkerIcon,
  iconSize,
  iconAnchor,
});

const redIcon = new L.Icon({
  iconUrl: redMarkerIcon,
  iconSize,
  iconAnchor,
});

export { blueIcon, redIcon };

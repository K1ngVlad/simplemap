import { useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

import { center, zoom, openstreetmapUrl } from '../../utils';
import { geoJSONStyle, pointToLayer } from './functions';
import { MapContext } from '../../contexts';

import 'leaflet/dist/leaflet.css';
import s from './style.module.css';

const MapComponent = () => {
  const { features, municipalitet, mark } = useContext(MapContext);
  return (
    <div className={s.container}>
      <MapContainer center={center} zoom={zoom} className={s.mapComponent}>
        <TileLayer url={openstreetmapUrl} />
        <GeoJSON
          key={Date.now()}
          data={features}
          pointToLayer={(feature, latlng) =>
            pointToLayer(feature, latlng, municipalitet, mark)
          }
          style={(feature) => geoJSONStyle(feature, municipalitet)}
        />
      </MapContainer>
    </div>
  );
};

export { MapComponent };

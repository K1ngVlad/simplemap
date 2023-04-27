import { useState } from 'react';
import { MapComponent, SideBar, WaterMark } from './components';
import { MapProvider } from './contexts';

import data from './assets/settlement.json';

import './styles/fonts.css';
import './styles/globalStyles.css';

const municipalitets = Array.from(
  new Set(data.features.map((e) => e.properties.municipalitet))
).sort();

const App = () => {
  const [municipalitet, setMunicipalitet] = useState('');
  const [mark, setMark] = useState(false);

  return (
    <MapProvider
      value={{
        features: data.features,
        municipalitets,
        municipalitet,
        setMunicipalitet,
        mark,
        setMark,
      }}
    >
      <div className="app">
        <SideBar />
        <MapComponent />
        <WaterMark />
      </div>
    </MapProvider>
  );
};

export default App;

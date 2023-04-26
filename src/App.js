import { useState } from 'react';
import { MapComponent, SideBar, WaterMark } from './components';
import { MapProvider } from './contexts';

import data from './assets/settlement.json';

import './styles/fonts.css';
import './styles/globalStyles.css';

const App = () => {
  const [municipalitet, setMunicipalitet] = useState('');

  return (
    <MapProvider
      value={{
        features: data.features,
        municipalitets: new Set(
          data.features.map((e) => e.properties.municipalitet)
        ),
        municipalitet,
        setMunicipalitet,
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

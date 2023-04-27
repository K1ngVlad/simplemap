import { useContext } from 'react';

import { MapContext } from '../../contexts';

import s from './style.module.css';

const SideBar = () => {
  const { municipalitet, setMunicipalitet, municipalitets, mark, setMark } =
    useContext(MapContext);

  return (
    <aside className={s.sideBar}>
      <h2>Simple map</h2>
      <div className={s.selectBlock}>
        <hr />
        <h3 className={s.blockTitle}>Район</h3>
        <select
          value={municipalitet}
          onChange={(e) => setMunicipalitet(e.target.value)}
          className={s.select}
        >
          <option value={''}>{'--Выберите район--'}</option>
          {municipalitets.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <label className={s.setMark}>
          <span>Метки</span>
          <input
            className={s.checkBox}
            type="checkbox"
            value={mark}
            onChange={() => {
              setMark((e) => !e);
            }}
          />
        </label>
      </div>
    </aside>
  );
};

export { SideBar };

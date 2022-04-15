import { useDispatch } from 'react-redux';
import { otherFilters, setFilters } from '../Redux/FilterSlice'
import { useState } from 'react';

function FiltersInputs() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<otherFilters>({
    diameter: 0,
    orbital_period: 0,
    climate: 'temperate'
  })
  return (
      <form>
        <label htmlFor="diameter">
          Diâmetro: 
          <input type="number" onChange={(e: any) => setFilter({ ...filter, diameter: e.target.value})}></input>
        </label>

        <label htmlFor="orbital_period">
          periodo orbital: 
          <input type="number" onChange={(e: any) => setFilter({ ...filter, orbital_period: e.target.value })}></input>
        </label>

        <label htmlFor="climate">
          clima: 
          <select onChange={(e: any) => setFilter({ ...filter, climate: e.target.value })}>
            <option>temperate</option>
            <option>arid</option>
            <option>frozen</option>
            <option>tropical</option>
            <option>murky</option>
          </select>
        </label>

        <button type='button' onClick={() => dispatch(setFilters(filter))}>enviar</button>
      </form>
  );
}

export default FiltersInputs;

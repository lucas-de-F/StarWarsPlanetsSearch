import { useDispatch } from 'react-redux';
import { otherFilters } from '../Redux/types'
import { setFilters } from '../Redux/FilterSlice'
import { useState } from 'react';

function FiltersInputs() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<otherFilters>({
    filter_option: 'population',
    as: 'equal',
    value: 0,
  })
  return (
      <form>
        
        <label htmlFor="climate">
          Filter by: 
          <select onChange={(e: any) => setFilter({ ...filter, filter_option: e.target.value })}>
            <option>population</option>
            <option>diameter</option>
            <option>orbital_period</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        
        <label htmlFor="climate">
          <select onChange={(e: any) => setFilter({ ...filter, as: e.target.value })}>
            <option value='equal'>equal</option>
            <option value='greater'>greater_than</option>
            <option value='less'>less_than</option>
          </select>
        </label>
        <input type="number" onChange={(e: any) => setFilter({ ...filter, value: Number(e.target.value) })}></input>
        <button type='button' onClick={() => dispatch(setFilters(filter))}>enviar</button>
      </form>
  );
}

export default FiltersInputs;

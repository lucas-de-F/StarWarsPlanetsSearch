import { useDispatch } from 'react-redux';
import { otherFilters } from '../Redux/types'
import { setFilters } from '../Redux/FilterSlice'
import { useState } from 'react';
import { Select } from '../inputs/Select'

function FiltersInputs() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<otherFilters>({
    filter_option: 'population',
    as: 'equal',
    value: 0,
  })

  const filterOption = (e: any) => setFilter({ ...filter, filter_option: e.target.value });
  const filterAs = (e: any) => setFilter({ ...filter, as: e.target.value });
  const filterValue = (e: any) => setFilter({ ...filter, value: Number(e.target.value) });
  const arrOption = [ 'diameter', 'population', 'orbital_period', 'rotation_period', 'surface_water' ]
  const arrAs = [ 'equal', 'greater', 'less' ]

  return (
      <form>
        <Select params={arrOption} changeState={filterOption} />
        <Select params={arrAs} changeState={filterAs} />
        <input type="number" onChange={filterValue}></input>
        <button type='button' onClick={() => dispatch(setFilters(filter))}>enviar</button>
      </form>
  );
}

export default FiltersInputs;

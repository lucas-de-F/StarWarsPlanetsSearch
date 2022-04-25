import { useDispatch } from 'react-redux';
import { otherFilters } from '../Redux/types'
import { setFilters } from '../Redux/FilterSlice'
import { useState } from 'react';
import { SelectInp } from '../inputs/Select'
import { Button, Input } from '@mui/material';

function FiltersInputs({toggle}: any ) {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<otherFilters>({
    filter_option: 'population',
    as: 'greater',
    value: 0,
  })

  const filterOption = (e: any) => setFilter({ ...filter, filter_option: e.target.value });
  const filterAs = (e: any) => setFilter({ ...filter, as: e.target.value });
  const filterValue = (e: any) => setFilter({ ...filter, value: Number(e.target.value) });
  const arrOption = [ 'diameter', 'population', 'orbital_period', 'rotation_period', 'surface_water' ]
  const arrAs = [ 'greater', 'equal', 'less' ]

  return (
      <form style={{ display:'flex', flexDirection: 'column', alignItems: 'space-between'}}>
        <SelectInp params={arrOption} changeState={filterOption} value={filter.filter_option} />

        <SelectInp params={arrAs} changeState={filterAs} value={filter.as}/>

        <Input style={{ margin: 10 }} type="number" onChange={filterValue} value={filter.value}></Input>

        <Button style={{ background: '#003566', color: 'white', margin: 10}} onClick={() => {
          dispatch(setFilters(filter))
          toggle()
          }}>enviar</Button>
      </form>
  );
}

export default FiltersInputs;

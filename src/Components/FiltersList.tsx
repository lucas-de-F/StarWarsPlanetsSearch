import { useDispatch, useSelector } from 'react-redux';
import { otherFilters, removeFilters } from '../Redux/FilterSlice'
import { useState } from 'react';
import { RootState } from '../Redux/store';

function FiltersInputsList() {
  const otherFilters = useSelector((state: RootState) => state.planetFilter.otherFilters)
  const dispatch = useDispatch()
  return (
    <div>

    { otherFilters ? otherFilters.map((filter) => (
    <div>
      <p>
        clima: {filter.climate} diametro: {filter.diameter} priodoOrbital: {filter.orbital_period}
        <button onClick={() => dispatch(removeFilters(filter.id as number)) }>X</button>
      </p>
    </div>
  )): null }
    </div>
  )
}

export default FiltersInputsList;
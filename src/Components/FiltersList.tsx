import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilters } from '../Redux/FilterSlice';
import { RootState } from '../Redux/store';
import { planet } from '../pages/types';
import { setFilteredPlanets } from '../Redux/Thunk';

function FiltersInputsList() {
  const { otherFilters } = useSelector((state: RootState) => state.planetFilter)
  const { entities } = useSelector((state: RootState) => state.PlanetsSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFilteredPlanets(entities))
    const applyfilters = otherFilters.map(({ as, filter_option, value }) => {
      if(as === 'less') {
        const filter = entities.filter((planet) => Number(planet[filter_option]) < value ? planet : null)
        return dispatch(setFilteredPlanets(filter))
      }
      if(as === 'greater') {
        const filter = entities.filter((planet) => Number(planet[filter_option]) > value ? planet : null)
        return dispatch(setFilteredPlanets(filter))
      }
      if(as === 'equal') {
        const filter = entities.filter((planet) => Number(planet[filter_option]) === value ? planet : null)
        return dispatch(setFilteredPlanets(filter))
      }
    })
  }, [otherFilters])

  return (
    <div>

    { otherFilters ? otherFilters.map((filter) => (
    <div>
      <p>
        Filtered By: {filter.filter_option} {filter.as} {filter.value}
        <button onClick={() => dispatch(removeFilters(filter.id as number)) }>X</button>
      </p>
    </div>
  )): null }
    </div>
  )
}

export default FiltersInputsList;

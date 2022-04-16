import { useDispatch, useSelector } from 'react-redux';
import { removeFilters } from '../Redux/FilterSlice'
import { RootState } from '../Redux/store';

function FiltersInputsList() {
  const otherFilters = useSelector((state: RootState) => state.planetFilter.otherFilters)
  const dispatch = useDispatch()
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

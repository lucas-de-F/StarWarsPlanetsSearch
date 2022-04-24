import { useDispatch, useSelector } from 'react-redux';
import { removeFilters } from '../Redux/FilterSlice';
import { RootState } from '../Redux/store';
import { otherFilters } from '../Redux/types';

function FiltersInputsList() {
  const { otherFilters } = useSelector((state: RootState) => state.planetFilter)
  const dispatch = useDispatch()

  const renderFilter = ({ filter_option, as, value }: otherFilters) => (
    <div>
      <p style={{ color: 'white' }}>
        Filtered By: {filter_option} {as} {value}
        <button onClick={() => {
          dispatch(removeFilters())
        }}>X</button>
      </p>
    </div>
  )

  if (Object.keys(otherFilters).length > 0) {
    return renderFilter(otherFilters as otherFilters)
  }

  return (<div></div>)
}

export default FiltersInputsList;

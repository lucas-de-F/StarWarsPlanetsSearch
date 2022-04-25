import { Button, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilters } from '../Redux/FilterSlice';
import { RootState } from '../Redux/store';
import { otherFilters } from '../Redux/types';

function FiltersInputsList() {
  const { otherFilters } = useSelector((state: RootState) => state.planetFilter)
  const dispatch = useDispatch()

  const renderFilter = ({ filter_option, as, value }: otherFilters) => (
    <div style={{ margin: 10 }}>
        < Chip variant="outlined" label={`${filter_option} ${as} ${as !== 'equal' && 'than'} ${value}`} style={{ color: '#FFD60A'}} />

        <Button style={{ color: '#FFD60A'}} onClick={() => {
          dispatch(removeFilters())
        }}>X</Button>
    </div>
  )

  if (Object.keys(otherFilters).length > 0) {
    return renderFilter(otherFilters as otherFilters)
  }

  return (<div></div>)
}

export default FiltersInputsList;

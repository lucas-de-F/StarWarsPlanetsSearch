import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Redux/store'
import { fetchPlanets } from './Redux/Thunk'
import { setName, setDiameter, setPopulation } from './Redux/FilterSlice'
import { PlanetCards } from './pages/home'

function App() {
  const dispatch = useDispatch();
  const planetFilter = useSelector((state: RootState) => state.planetFilter)
  dispatch(fetchPlanets())

  return (
    <div className="App">
      <PlanetCards />
    </div>
  );
}

export default App;

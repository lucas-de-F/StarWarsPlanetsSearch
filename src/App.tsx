import './App.css';
import { useDispatch } from 'react-redux';
import { setName } from './Redux/FilterSlice'
import { PlanetCards } from './pages/home'
import FiltersInputs from './Components/Filters';
import FiltersInputsList from './Components/FiltersList';

function App() {
  const dispatch = useDispatch()

  return (
    <div>
      nome: <input type="text" onChange={(e) => dispatch(setName(e.target.value))}></input>
      <FiltersInputs />
      <FiltersInputsList />
      <PlanetCards />
    </div>
  );
}

export default App;

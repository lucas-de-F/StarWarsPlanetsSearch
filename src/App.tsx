import './App.css';
import { useDispatch } from 'react-redux';
import { setName } from './Redux/FilterSlice'
import { PlanetCards } from './pages/home'

function App() {
  const dispatch = useDispatch()

  return (
    <div>
      <input type="text" onChange={(e) => dispatch(setName(e.target.value))}></input>
      <PlanetCards />
    </div>
  );
}

export default App;

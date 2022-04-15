import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Redux/store'
import { fetchPlanets } from './Redux/Thunk'
import { setName, setDiameter, setPopulation } from './Redux/FilterSlice'

function App() {
  const dispatch = useDispatch();
  const planetFilter = useSelector((state: RootState) => state.planetFilter)
  dispatch(fetchPlanets())

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column'}}>
        <div>
        nome: { planetFilter.name }
        </div>

        <div>
        <input type="text" id="name" onChange={(e) => dispatch(setName(e.target.value))} />
        </div>

        <div>
        população: { planetFilter.population }
        </div>

        <div>
        <input type="number" id="população" onChange={(e) => dispatch(setDiameter(Number(e.target.value)))} />
        </div>

        <div>
        <input type="number" id="diâmetro" onChange={(e) => dispatch(setPopulation(Number(e.target.value)))} />
        </div>

        <div>
        diâmetro { planetFilter.diameter }
        </div>

      </header>
    </div>
  );
}

export default App;

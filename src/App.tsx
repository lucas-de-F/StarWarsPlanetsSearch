import './App.css';
import { useDispatch } from 'react-redux';
import { otherFilters, setFilters, setName } from './Redux/FilterSlice'
import { PlanetCards } from './pages/home'
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<otherFilters>({
    diameter: 0,
    orbital_period: 0,
    climate: ''
  })
  return (
    <div>
      nome: <input type="text" onChange={(e) => dispatch(setName(e.target.value))}></input>
      <form>
        <label htmlFor="diameter">
          Diâmetro: 
          <input type="number" onChange={(e: any) => setFilter({ ...filter, diameter: e.target.value})}></input>
        </label>

        <label htmlFor="orbital_period">
          periodo orbital: 
          <input type="number" onChange={(e: any) => setFilter({ ...filter, orbital_period: e.target.value })}></input>
        </label>

        <label htmlFor="climate">
          clima: 
          <select onChange={(e: any) => setFilter({ ...filter, climate: e.target.value })}>
            <option>temperate</option>
            <option>arid</option>
            <option>frozen</option>
            <option>tropical</option>
            <option>murky</option>
          </select>
        </label>

        <button type='button' onClick={() => dispatch(setFilters(filter))}>enviar</button>
      </form>
      <PlanetCards />
    </div>
  );
}

export default App;

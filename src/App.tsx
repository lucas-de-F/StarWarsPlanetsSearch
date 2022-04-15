import './App.css';
import { useSelector } from 'react-redux';
import { AnyAction, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { RootState } from './Redux/store'

function App() {
  const planetFilter = useSelector((state: RootState) => state.planetFilter)
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column'}}>
        <div>
        nome { planetFilter.name }
        </div>
        <div>
        população { planetFilter.population }
        </div>
        <div>
        diâmetro { planetFilter.diameter }
        </div>
      </header>
    </div>
  );
}

export default App;

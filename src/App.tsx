import './App.css'
import { Card } from './Components/Card';
import { Header } from './Components/Header'
import { Sections } from './Components/Sections'

function App() {
  return (
    <body className="parent bodyColor">
      <Header />
      <Card />
      <Sections />
      
      <div className="article">  </div>
      <div className="section1Nav ">a </div>
      <div className="section1Item1 ">a </div>
      <div className="section1Item2 "></div>
      <div className="footer darkColor">a </div>
      <div className="section1 darkColor">  </div>
    </body>
  );
}

export default App;

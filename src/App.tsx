import './App.css'
import { Card } from './Components/Card';
import { Header } from './Components/Header'
import { Footer, Netflix, 
ComingSoon } from './imgs/footer'
function App() {
  return (
    <body className="parent bodyColor">
      <Header />
      <Card />

      
      <div className="article"> asdasdasdasdasdasda </div>
      <div className="section1Nav ">a </div>
      <div className="section1Item1 ">a </div>
      <div className="section1Item2 "></div>
      <div className="section2 darkColor"><Footer /> <Netflix /> </div>
      <div className="sectionFooter darkColor">
        <ComingSoon></ComingSoon>
      </div>
      <div className="footer darkColor">a </div>
      <div className="section1 darkColor">  </div>
    </body>
  );
}

export default App;

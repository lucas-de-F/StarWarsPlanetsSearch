import { Footer, Netflix, ComingSoon } from '../imgs/footer'
import { SearchPlanets } from './SerchPlanets'

export const Sections = () => {
    
    return (
    <>
        <div className="section2 darkColor"><Footer /> <Netflix /> </div>
        <div className="sectionFooter darkColor">
            <ComingSoon></ComingSoon>
        </div>
      <div className="section1 darkColor"> 
      <SearchPlanets />
      </div>


    </>
) }
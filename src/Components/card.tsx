import { useSelector } from "react-redux"
import { planet } from "./types"
import { RootState } from "../Redux/store"

export const Planets = () => {
    const planetsFiltered = useSelector((state: RootState) => state.PlanetsSlice.filtered)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
            {planetsFiltered.map((planet: planet) => (
                <div style={{ display: 'flex', flexDirection: 'column', margin: 20, backgroundColor: 'grey' }}>
                    <h3>{planet.name}</h3>
                    <p>{planet.population}</p>
                    <p>{planet.diameter}</p>
                </div>))}
        </div>
    )
}
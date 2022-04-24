import { useSelector } from "react-redux"
import { RootState } from "../Redux/store"

export const Planets = () => {
    const { filtered, index } = useSelector((state: RootState) => state.PlanetsSlice)
    if (filtered.length > 0 && index <= filtered.length) {
        const { name, population, diameter } = filtered[index]

        return (
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'grey' }}>
                    <h3>{name}</h3>
                    <p>{population}</p>
                    <p>{diameter}</p>
                </div>
                <p style={{ color: 'white' }}>
                    {index} of {filtered.length}
                </p>
            </div>
        )
    }
    return <>CAN NOT BE FOUND</>
}
import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../Redux/store"

export const Planets = () => {
    const { filtered, index } = useSelector((state: RootState) => state.PlanetsSlice)
    if (filtered.length > 0 && index <= filtered.length) {
        const { name, population, diameter } = filtered[index]

        return (
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', margin: 60 }}>
                <div style={{
                    backgroundColor: '#003566',
                    width: 250,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '40px 40px 40px 40px'    
                }}>
                
                <svg width="144" height="144" style={{ margin: 20 }}  viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="72" cy="72" r="72" style={{ boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'}} fill={ `#${Math.floor(Math.random()*16777215).toString(16)}`}/>
                </svg>

                <p style={{ color: 'white' }}>
                    {index + 1} of {filtered.length}
                </p>
                    <Typography style={{ alignSelf: 'center', fontFamily: 'gotham book', color:'#FFD60A'}}>name: {name}</Typography>
                    <Typography style={{ alignSelf: 'center', fontFamily: 'gotham book', color:'#FFD60A'}}>population: {population}</Typography>
                    <Typography style={{ alignSelf: 'center', fontFamily: 'gotham book', color:'#FFD60A', marginBottom: 20}}>diameter: {diameter}</Typography>
                </div>
            </div>
        )
    }
    return <Typography style={{
        alignSelf: 'center',
        fontFamily: 'gotham book',
        color:'#FFD60A',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 200
    }}>CAN NOT BE FOUND</Typography>
}
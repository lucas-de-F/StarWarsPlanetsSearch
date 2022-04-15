import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchPlanets, setFilteredPlanets } from '../Redux/Thunk';
import { planet } from './types';

export const PlanetCards = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.planetFilter)

    const AllPlanets = useSelector((state: RootState) => state.PlanetsSlice.entities)
    const planetsFiltered = useSelector((state: RootState) => state.PlanetsSlice.filtered)

    useEffect(() => {
        dispatch(fetchPlanets())
    }, [])

    useEffect(() => {
        if (filters.name !== '') {
            const filteredByName: planet[] = AllPlanets.filter((planet: planet) => planet.name.includes(filters.name))
            dispatch(setFilteredPlanets(filteredByName))
        } else {
            dispatch(setFilteredPlanets(AllPlanets))
        }
    }, [filters.name, dispatch])

    const planets = planetsFiltered.map((planet: planet) => (
        <div style={{ display: 'flex', flexDirection: 'column', margin: 20, backgroundColor: 'grey' }}>
            <h3>{planet.name}</h3>
            <p>{planet.population}</p>
            <p>{planet.diameter}</p>
        </div>
    ))
    return (<div style={{ display: 'flex', flexDirection: 'row' }}>{planets}</div>)
}
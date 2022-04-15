import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import { planet } from './types';

export const PlanetCards = () => {
    const planets = useSelector((state: RootState) => state.PlanetsSlice.entities)

    const RenderPlanets = planets.map((planet: planet) => (
        <>
            <h3>{planet.name}</h3>
            <p>{planet.population}</p>
            <p>{planet.diameter}</p>
        </>
    ))

    return (<>{RenderPlanets}</>)
}
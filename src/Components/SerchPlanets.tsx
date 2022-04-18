import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchPlanets, setFilteredPlanets } from '../Redux/Thunk';
import { planet } from './types';
import FiltersInputs from '../Components/Filters';
import { Planets } from './cardplanet';
import FiltersInputsList from '../Components/FiltersList';
import { setName } from '../Redux/FilterSlice';

export const SearchPlanets = () => {
    const dispatch = useDispatch();
    const { entities } = useSelector((state: RootState) => state.PlanetsSlice)
    const { otherFilters, name } = useSelector((state: RootState) => state.planetFilter)

    const func = async (filteredByName: planet[]) => {
        const result = otherFilters.forEach(({ as, filter_option, value }) => {
            if (as === 'less') {
                const filter = filteredByName.filter((planet) => Number(planet[filter_option]) < value ? planet : null)
                return dispatch(setFilteredPlanets([...filter]))
            }
            if (as === 'greater') {
                const filter = filteredByName.filter((planet) => Number(planet[filter_option]) > value ? planet : null)
                return dispatch(setFilteredPlanets([...filter]))
            }
            if (as === 'equal') {
                const filter = filteredByName.filter((planet) => Number(planet[filter_option]) === value ? planet : null)
                return dispatch(setFilteredPlanets([...filter]))
            }
        })
        return result
    }
    useEffect(() => {
        dispatch(fetchPlanets())
    }, [])

    useEffect(() => {
        const filteredByName: planet[] = entities.filter((planet: planet) => planet.name.includes(name))
        dispatch(setFilteredPlanets(filteredByName))
        func(filteredByName)
    }, [name, otherFilters, dispatch])


    return (
        <>
            <div>
                nome: <input type="text" onChange={(e) => {
                    dispatch(setName(e.target.value))
                }}></input>
                <FiltersInputs />
                <FiltersInputsList />
                <Planets />
            </div>
        </>
    )
}

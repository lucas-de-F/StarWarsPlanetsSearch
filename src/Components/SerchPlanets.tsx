import '../App.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchPlanets, setFilteredPlanets } from '../Redux/Thunk';
import { planet } from './types';
import FiltersInputs from '../Components/Filters';
import { Planets } from './cardplanet';
import FiltersInputsList from '../Components/FiltersList';
import { setName } from '../Redux/FilterSlice';
import { otherFilters } from '../Redux/types';
import { LupaSvg } from '../imgs/footer';

export const SearchPlanets = () => {
    const [ activeFilters, setActiveFilters ] = useState(false)
    const [ activeSearchBar, setActiveSearchBar ] = useState(false)
    const [ buttonClass, setButotnClass ] = useState('rotate-center')
    const toggleSearchBar = () => {
        setButotnClass('')
        setActiveSearchBar(!activeSearchBar)
        setButotnClass('rotate-center')
    }

    const dispatch = useDispatch();
    const { entities } = useSelector((state: RootState) => state.PlanetsSlice)
    const { otherFilters, name } = useSelector((state: RootState) => state.planetFilter)

    const func = async (filteredByName: planet[]) => {
        const { as, filter_option, value } = otherFilters as otherFilters
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
            <div className="section1Nav">
            {
                activeSearchBar ? (<div>
                    <input type="text" value={name} className='scale-up-hor-right' onChange={(e) => {
                        dispatch(setName(e.target.value))
                    }}></input>
                </div>)
                : null
            }
            <button onClick={toggleSearchBar} style={{ backgroundColor: '#003566', border: 0}}>
            <LupaSvg classname={buttonClass} />
            </button>
            </div>
            <div className="section1Item1 ">
                <button type='button' onClick={() => setActiveFilters(!activeFilters)}>FIltros</button>
                {activeFilters && (
                    <>
                        <FiltersInputs />
                        <FiltersInputsList />
                    </>
                )}
            </div>
            <div className="section1Item2 "><Planets /></div>
            <div className="footer darkColor">aasdasdas </div>
        </>
    )
}

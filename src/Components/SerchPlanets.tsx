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
import { LupaSvg, Settings, SettingsStatus } from '../imgs/footer';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

export const SearchPlanets = () => {
    const [activeFilters, setActiveFilters] = useState(false)
    const [activeSearchBar, setActiveSearchBar] = useState(false)
    // const [buttonClass, setButotnClass] = useState('rotate-center')
    const toggleSearchBar = () => setActiveSearchBar(!activeSearchBar)
    const toggleFilters = () => setActiveFilters(!activeFilters)

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

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '38%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
            <div className="section1Nav">
                <button type='button' style={{ all: 'unset', cursor: 'pointer', margin: 10 }} onClick={() => setActiveFilters(!activeFilters)}> {
                    Object.keys(otherFilters).length > 0 ? <SettingsStatus /> : <Settings />}</button>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {
                        activeSearchBar ? (<div>
                            <TextField type="search" autoFocus={true} color='secondary' value={name} className='scale-up-hor-right' onChange={(e) => {
                                dispatch(setName(e.target.value))
                            }}></TextField>
                        </div>)
                            : null
                    }
                    <button onClick={() => {
                        toggleSearchBar()
                    }} style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        padding: 10,
                        background: 'none',
                        border: 0
                    }} className={activeSearchBar ? 'rotate-center' : ''}>
                        <LupaSvg />
                    </button>
                </div>
            </div>
            <div className="section1Item1 ">
                {activeFilters && (
                    <>
                        <Modal
                            
                            open={activeFilters}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box sx={style} className='slide-top' style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button onClick={toggleFilters} style={{ alignSelf: 'end', width: 10 }} color='secondary'>X</Button>
                                <Typography id="keep-mounted-modal-title" style={{ textAlign: 'center' }} variant="h6" component="h2">
                                    Adicionar filtros
                                </Typography>
                                <FiltersInputs toggle={toggleFilters}/>
                            </Box>
                        </Modal>
                    </>
                )}
                {Object.keys(otherFilters).length > 0 && <FiltersInputsList />}
            </div>
            <div className="section1Item2"><Planets /></div>
            <div className="footer darkColor">aasdasdas </div>
        </>
    )
}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/ControlBar.module.css';
import { filterTemperaments, getTemperaments } from "../redux/action";

export default function FilterBy() {

    const dispatch = useDispatch();

    function handleFilterValue(e) {
        e.preventDefault(e);
        dispatch(filterTemperaments(e.target.value));
    }

    const [input, setInput] = useState({
        temperaments:[]
    })

    const temperaments = useSelector((state) => state.temperaments);
    function handleSelect(e) {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }


    useEffect(() => {
        dispatch(getTemperaments());
    }, [])

    return (
        <div className={styles.filterby}>
            <div>
                <select onChange={(e) => handleSelect(e)}>
                    <option disabled selected>Select temperament</option>
                    {temperaments.map((tem) => (
                        <option value={tem.name}>{tem.name}</option>
                    ))}
                </select>
                {/* <select name="filterdogs" id="filterdogs" onChange={(e) => handleFilterValue(e)}>
                    <option disabled selected>Filter by temperament</option>
                    <option value="All">View all temperaments</option>
                    <option value="Stubborn">Stubborn</option>
                    <option value="Curious">Curious</option>
                    <option value="Playful">Playful</option>
                    <option value="Active">Active</option>
                    <option value="Fun - loving">Fun - loving</option>
                    <option value="Aloof">Aloof</option>
                    <option value="Clownish">Clownish</option>
                    <option value="Dignified">Dignified</option>
                    <option value="Independent">Independent</option>
                    <option value="Happy">Happy</option>
                </select> */}
            </div>
            {/* <div>
                <select name="filterapi" id="filterapi">
                    <option value="filter-db-api">View all dogs from API-DB</option>
                    <option value="filter-api">View API dogs</option>
                    <option value="filter-db">View DB dogs</option>
                </select>
            </div> */}
        </div >
    )
}
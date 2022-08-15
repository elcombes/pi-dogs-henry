import React from "react";
import styles from '../css/ControlBar.module.css';
import { filterTemperaments } from "../redux/action";
import { useDispatch } from "react-redux";

export default function FilterBy() {

    const dispatch = useDispatch();

    function handleFilterValue(e) {
        e.preventDefault(e);
        dispatch(filterTemperaments(e.target.value));
    }

    return (
        <div className={styles.filterby}>
            <div>
                <select name="filterdogs" id="filterdogs" onChange={(e) => handleFilterValue(e)}>
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
                </select>
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
import React from "react";
import styles from '../css/ControlBar.module.css';

export default function FilterBy() {
    return (
    <div className={styles.filterby}>
        <div>
            <select name="filterdogs" id="filterdogs">
                <option value="all-dogs">View all dog's temperament</option>
                <option value="filter-temperaments">Filter by temperament</option>
            </select>
        </div>
        <div>
            <select name="filterapi" id="filterapi">
                <option value="filter-db-api">View all dogs from API-DB</option>
                <option value="filter-api">View API dogs</option>
                <option value="filter-db">View DB dogs</option>
            </select>
        </div>
    </div >
    )
}
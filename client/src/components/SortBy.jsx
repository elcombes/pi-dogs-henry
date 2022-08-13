import React from "react";
import styles from '../css/ControlBar.module.css';

export default function SortBy() {
    return (
        <div className={styles.sortby}>
            <select name="sortdogs" id="sortdogs">
                <option value="sort-a-z">Sort elements by A to Z</option>
                <option value="sort-weight">Sort elements by weight</option>
            </select>
        </div>
    )
}
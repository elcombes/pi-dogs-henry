import React from 'react';
import styles from '../css/ControlBar.module.css';
import SearchBar from './SearchBar.jsx';
import SortBy from './SortBy.jsx'
import FilterBy from './FilterBy.jsx'

export default function ControlBar({ onSearch }) {
    return (
        <div className={styles.controlbar}>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
            <div>
                
            </div>
            <div>
                <FilterBy />
            </div>
        </div>
    )
}
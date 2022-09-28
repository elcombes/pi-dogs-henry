import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/ControlBar.module.css';
import { filterTemperaments, getTemperaments } from "../redux/action";

export default function FilterBy() {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    temperaments: []
  })

  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [])
  
  function handleSelect(e) {
    dispatch(filterTemperaments(e.target.value))
  }

  return (
    <div className={styles.filterby}>
      <div>
        <select onChange={(e) => handleSelect(e)}>
          <option value='All' >Select temperament</option>
          {temperaments.map((tem) => (
            <option key={tem.id} value={tem.name}>{tem.name}</option>
          ))}
        </select>
      </div>
    </div >
  )
}
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getdogsByName } from "../redux/action";
import styles from '../css/ControlBar.module.css';

export default function Search() {
  const dispatch = useDispatch();
  const [nameDogs, setNameDogs] = useState("");

  function handleInput(e) {
    setNameDogs(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (nameDogs) {
      dispatch(getdogsByName(nameDogs));
      setNameDogs("");
    }
  }

  return (
    <div>
      <form className={styles.formsearch} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={`input-search ${styles.searchinput}`}
          type="text"
          placeholder="Search..."
          value={nameDogs}
          onChange={(e) => handleInput(e)}
        />
        <button className={`btn-search ${styles.searchbutton}`} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
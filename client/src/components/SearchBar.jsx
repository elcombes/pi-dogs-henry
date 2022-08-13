import React, { useState } from "react";
import styles from '../css/ControlBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className={styles.formsearch} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Example: Akita..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
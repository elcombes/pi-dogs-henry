import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { obtener, orderByName, orderByWeight } from '../../redux/action'
import { useState } from "react";
import Card from "./Card";
import Pagination from "../Pagination";
import styles from '../../css/Cards.module.css';
import FilterBy from '../FilterBy.jsx'

export default function Cards() {

  const dispatch = useDispatch()
  const estadoSoloDogs = useSelector(state => state.dogs)

  // Seteo Paginado

  const [, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage] = useState(8) // de posición 0 a 7

  const indexOfLastDog = currentPage * dogsPerPage // 8
  const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
  const currentDogs = estadoSoloDogs.slice(indexOfFirstDog, indexOfLastDog)

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber) // seteo pagina actual en el numero de pagina
  }

  // Fin seteo paginado

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
    console.log(setCurrentPage(1));
  }
  function handleSortScore(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  useEffect(() => {           // useEffect emula con una fc de callback component amount
    dispatch(obtener())
  }, [dispatch])

  return (
    <div className={styles.cardscontainer}>
      <div className={styles.sortby}>
        <div>
          <select value="default" name="sortDogs" id="sortDogs" onChange={(e) => handleSort(e)}>
            <option value="">Sort elements - Alphabetically</option>
            <option value="sort-a-z">A to Z</option>
            <option value="sort-z-a">Z to A</option>
          </select>
        </div>
        <div>
          <select
            name="sortDogs"
            id="sortDogs"
            onChange={(e) => handleSortScore(e)}
          >
            <option value="">Sort elements - Weight</option>
            <option value="sort-weight-asc">Min- Max</option>
            <option value="sort-weight-desc">Max- Min</option>
          </select>
        </div>
        <div>
          <FilterBy />
        </div>
      </div>
      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          estadoSoloDogs={estadoSoloDogs.length}
          pagination={pagination}
        />
      </div>
      <div className={styles.cardcontainer}>
        {currentDogs.length && currentDogs.map((edogs, i) =>
          <Card key={i} id={edogs.id} image={edogs.image} name={edogs.name} height={edogs.height} weight={edogs.weight} temperament={edogs.temperament} />
        )}
      </div>
      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          estadoSoloDogs={estadoSoloDogs.length}
          pagination={pagination}
        />
      </div>
    </div>
  )
}
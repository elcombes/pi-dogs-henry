import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { obtener } from '../../redux/action'
import { useState } from "react";
import Card from "./Card";
import Pagination from "../Pagination";
import styles from '../../css/Cards.module.css';

export default function Cards() {

    const dispatch = useDispatch()
    const estadoSoloDogs = useSelector(state => state.dogs)

    // Seteo Paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8) // de posición 0 a 7

    const indexOfLastDog = currentPage * dogsPerPage // 8
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
    const currentDogs = estadoSoloDogs.slice(indexOfFirstDog, indexOfLastDog)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber) // seteo pagina actual en el numero de pagina
    }
    // Fin seteo paginado

    useEffect(() => {           // useEffect emula con una fc de callback component amount
        dispatch(obtener())
    }, [dispatch])

    return (
        <div>
            <div>
                <Pagination
                    dogsPerPage={dogsPerPage}
                    estadoSoloDogs={estadoSoloDogs.length}
                    pagination={pagination}
                />
            </div>
            <div className={styles.cardcontainer}>
                {currentDogs.length && currentDogs.map((edogs, i) =>
                    <Card key={i} image={edogs.image} name={edogs.name} height={edogs.height} weight={edogs.weight} temperament={edogs.temperament} />
                )}
            </div>
        </div>
    )
}
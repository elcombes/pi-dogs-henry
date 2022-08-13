import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { obtener } from '../../redux/action'

import styles from '../../css/Cards.module.css';


export default function Cards() {

    const dispatch = useDispatch()
    const estadoSoloDogs = useSelector(state => state.dogs)

    // useEffect emula con una fc de callback component amount

    useEffect(() => {
        dispatch(obtener())
    }, [dispatch])

    return (
        <div>
            <div className={styles.cardcontainer}>
                {estadoSoloDogs.length && estadoSoloDogs.map((edogs, i) =>
                    <Card key={i} image={edogs.image} name={edogs.name} height={edogs.height} weight={edogs.weight} temperament={edogs.temperament}/>
                )}
            </div>
        </div>
    )
}
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
            <h2>Henry's Dogs List</h2>
            <div className={styles.cardcontainer}>
                {estadoSoloDogs.length && estadoSoloDogs.map((edogs, i) =>
                    <Card key={i} image={edogs.image} name={edogs.name} height={edogs.height} weight={edogs.weight} life_span={edogs.life_span} />
                )}
            </div>
        </div>
    )
}
import React from 'react';

import styles from '../../css/Card.module.css';

export default function Card({ image, name, temperament, weight, life_span }) {

    return (
        <div>
            <div className={styles.infocontainer}>
                <div><img className={styles.imgperfil} src={image} alt='doggypics' /></div>
                <div><h2 className={styles.titledogs}>{name}</h2></div>
                <div className={styles.infocardwidth}>
                    <p>Temperament: </p>
                    <span>{temperament}</span>
                    <p>Weight: {weight} kgs.</p>
                </div>
                <div><h3>{life_span}</h3></div>
            </div>
            <div className={styles.buttondetail}>+</div>
        </div>
    )
}
import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../css/DogDetail.module.css'

export default function DogDetail({ image, name, temperament, weight, life_span }) {

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
                <Link to='/home'><span>Volver</span></Link>
            </div>
        </div>
    )
}
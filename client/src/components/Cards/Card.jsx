import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/Card.module.css';

export default function Card({ id, image, name, temperament, weight, life_span }) {
  console.log('ok', temperament) 

  return (
    <div className={styles.linkcard}>

      <Link to={`/dogs/${id}`}>

        <div className={styles.infocontainer}>
          <div>
            <img className={styles.imgperfil} src={image} alt='doggypics' />
          </div>
          <div>
            <h2 className={styles.titledogs}>{name}</h2>
          </div>
          <div className={styles.infocardwidth}>

            <p><span className={styles.temperamenttittle}>Temperament:</span>
              <br></br><span className={styles.temperamentlist}> {temperament} </span></p>

            <p><span className={styles.weighttittle}>Weight:</span><br></br>
              <span className={styles.weightlist}>{weight} kgs.</span></p>

          </div>
          <div><h3>{life_span}</h3></div>
        </div>
        <div className={styles.buttondetail}>+</div>

      </Link>
    </div>
  )
}
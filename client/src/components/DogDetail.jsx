import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../redux/action'
import styles from '../css/DogDetail.module.css'

export default function Detail(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    const dogdetail = useSelector((state) => state.detail)

    return (
        <div>
            { dogdetail.length > 0 ?
                <div className={styles.infocontainer}>
                    <div><img className={styles.imgperfil} src={dogdetail[0].image} alt='doggypics' /></div>
                    <div><h2 className={styles.titledogs}>{dogdetail[0].name}</h2></div>
                    <div className={styles.infocardwidth}>
                        <p>Temperament: </p>
                        <span>{dogdetail[0].temperament}</span>
                        <p>Height: {dogdetail[0].height} cm.</p>
                        <p>Weight: {dogdetail[0].weight} kgs.</p>
                    </div>
                    <div><h3>{dogdetail[0].life_span}</h3></div>
                    <Link to='/home'><span>Back to Home</span></Link>
                </div>
                : <p>Loading...</p>
            }
        </div>
    )
}


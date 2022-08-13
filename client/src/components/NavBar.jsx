import React from 'react';
import styles from '../css/NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div><img className={styles.logoimg} src="logoapp.png" alt="logoapp" /></div>
                <div><span className={styles.appTittle}>Henry Dogs</span></div>
                <div>
                    <ul className={styles.menulist}>
                        <li><Link to='/home'><span>Home</span></Link></li>
                        <li><Link to='/create'><span>Create +</span></Link></li>
                        <li><Link to='/about'><span>About me</span></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
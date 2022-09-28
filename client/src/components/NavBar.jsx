import React from 'react';
import styles from '../css/NavBar.module.css';
import Logo from '../img/logoapp.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.blocknav}>
          <Link to='/home'><img className={styles.logoimg} src={Logo} alt="logoapp" /></Link>
        </div>
        <div className={styles.blocknav}>
          <span className={styles.appTittle}>Henry Dogs</span>
        </div>
        <div className={styles.blocknav}>
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
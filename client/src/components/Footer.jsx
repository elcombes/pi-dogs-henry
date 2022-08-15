import styles from '../css/Footer.module.css'
import Logo from '../img/logoapp.png'

export default function Footer() {
    return (
        <div>
            <div className={styles.footerstyle}>
                <div><img className={styles.imgfooter} src={Logo} alt="logoapp" /></div>
            </div>
        </div>
    )
}
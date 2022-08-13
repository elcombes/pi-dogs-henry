import styles from '../css/Footer.module.css'

export default function Footer() {
    return (
        <div>
            <div className={styles.footerstyle}>
                <div><img className={styles.imgfooter} src="logoapp.png" alt="logoapp" /></div>
            </div>
        </div>
    )
}
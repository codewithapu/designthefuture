import Link from 'next/link'
import styles from "../../styles/Components/NavBar.module.scss"


export default function NavBar() {
    return (

        <nav className={styles.NavBar}>
            <div className={styles.Links}>
                <Link className={styles.Link} href="#">Home</Link>
                <Link className={styles.Link} href="#">creations</Link>
                <Link className={styles.Link} href="#">about us</Link>
            </div>
        </nav>

    );
}
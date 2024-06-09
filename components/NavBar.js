import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <nav className={styles.navBarContainer}>
            <Link  href="/">TillOf Help</Link>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
            
        </nav>
    )
}
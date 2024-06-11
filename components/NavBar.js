'use client'

import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
export default function NavBar() {
    function reload() {
        location.reload();
    }

    return (
        <nav className={styles.navBarContainer}>
            <Link  href="/">TillOf Help</Link>
            <ul>
                <li><Link  href="/" onClick={reload}>Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
            
        </nav>
    )
}
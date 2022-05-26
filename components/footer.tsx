import Link from "next/link";
import styles from './footer.module.css'


export function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/">
                <a>
                    <img src="/clubs.svg" alt="Clubs symbol" className={styles.logo} />
                    <img src="/spades.svg" alt="Spades symbol" className={styles.logo} />
                        Hopfensport.de
                    <img src="/hearts.svg" alt="Hearts Symbol" className={styles.logo} />
                    <img src="/diamonds.svg" alt="Diamonds Symbol" className={styles.logo} />
                </a>
            </Link>
        </footer>
    )
}
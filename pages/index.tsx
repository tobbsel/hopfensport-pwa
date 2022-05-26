import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
            Willkommen auf Hopfensport.de!
            </h1>

            <p className={styles.description}>
                Dein kleiner Helfer beim Schafkopf - Damit Du dich auf das konzentrieren kannst, was zählt.
            </p>

            <div className={styles.grid}>
                <Link href='/new_game'>
                    <a className={styles.card}>
                        <h3>Schnellstart &rarr;</h3>
                        <p>Starte direkt in ein neues Spiel mit deinen Freunden.</p>
                    </a>
                </Link>
                <Link href='/roadmap'>
                    <a className={styles.card}>
                        <h3>Roadmap &rarr;</h3>
                        <p>Neugierig, was für die Zukunft von Hopfensport.de geplant ist?</p>
                    </a>
                </Link>
                <Link href='/feedback'>
                    <a className={styles.card}>
                        <h3>Feeback &rarr;</h3>
                        <p>Verbesserungsideen? Einen Bug gefunden? Hier kannst du deinen Senf dazu geben.</p>
                    </a>
                </Link>
            </div>
        </main>
    )
}

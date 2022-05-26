import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import styles from '../styles/Home.module.css'

export default function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <div className={styles.container}>
            {children}
            <Footer />
        </div>
    )
}
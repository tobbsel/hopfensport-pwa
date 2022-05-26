import styles from '../styles/Home.module.css'
import { CreateIssueRequest } from '../shared/CreateIssueRequest'

export default function Feedback() {
    const buttonAction = async () => {
        const requestBody: CreateIssueRequest = {
            issueType: 'bug',
            title: 'title',
            description: 'This is a sample description.',
            creator: 'creator'
        }

        await fetch('api/create_issue', {
            method: 'POST',
            body: JSON.stringify(requestBody)
        })
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Feedback
            </h1>

            <p className={styles.description}>
                Hier entsteht die Feedbackseite...
            </p>

            <button onClick={buttonAction}>
                Abschicken!
            </button>
        </main>
    )
}

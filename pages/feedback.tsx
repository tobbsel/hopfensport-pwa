import styles from '../styles/feedback.module.css'
import { CreateIssueRequest, IssueType } from '../shared/CreateIssueRequest'
import React, { useState } from 'react'
import { Dropdown } from '../components/dropdown'
import { InputField } from '../components/inputField'
import Link from 'next/link'

interface MandatoryFieldErrors {
    title: boolean,
    description: boolean
}

type IssueCreationState = 'not submitted' | 'success' | 'error' | 'missing input'

const initialIssueState: CreateIssueRequest = {
    issueType: 'bug',
    title: '',
    description: '',
    creator: ''
}

const issueTypeNames: { key: IssueType, label: string }[] = [
    { key: 'bug', label: 'Bug-Meldung' },
    { key: 'improvement', label: 'Verbesserungs-Vorschlag' },
    { key: 'feature request', label: 'Neuer Feature-Wunsch' },
]

export default function Feedback() {
    const [ issueState, setIssueState ] = useState<CreateIssueRequest>(initialIssueState)
    const [ issueCreationState, setIssueCreatedState ] = useState<IssueCreationState>('not submitted')
    const [ mandatoryFieldErrors, setMandatoryFieldErrors ] = useState<MandatoryFieldErrors>({ title: false, description: false })
    const [ loading, setLoading ] = useState(false)

    const submitIssue = async () => {
        setLoading(true)
        try {
            setMandatoryFieldErrors({
                title: issueState.title === '',
                description: issueState.description === '',
            })

            if (issueState.title === '' || issueState.description === '') {
                setIssueCreatedState('missing input')
                return
            }

            const res =  await fetch('api/create_issue', {
                method: 'POST',
                body: JSON.stringify(issueState)
            })
            if (res.status !== 201) {
                setIssueCreatedState('error')
                return
            }

            setIssueState(initialIssueState)
            setIssueCreatedState('success')
        } finally {
            setLoading(false)
        }
        
    }

    const handleChange = (destinationName: string) => {
        return (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
            setIssueState({
                ...issueState,
                [destinationName]: event.target.value
            })
        }
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Feedback
            </h1>

            <p className={styles.description}>
                Hinterlasse gerne dein Feedback zur Seite!
            </p>
            <p className={styles.description}>
                Schau doch vorher auch auf der <Link href={'/roadmap'}><a className={styles.textLink}>Roadmap</a></Link> vorbei, ob dein Vorschlag nicht vielleicht sogar schon geplant ist.
            </p>

            <div>
                <Dropdown
                    label={'Feedback-Typ'}
                    value={issueState.issueType}
                    options={issueTypeNames}
                    onChange={handleChange('issueType')}
                    loading={loading}
                />

                <InputField
                    label={'Thema'}
                    value={issueState.title}
                    onChange={handleChange('title')}
                    maxLength={50}
                    error={mandatoryFieldErrors.title}
                    loading={loading}
                />
                <InputField
                    label={'Beschreibung'}
                    value={issueState.description}
                    onChange={handleChange('description')}
                    maxLength={300}
                    maxRows={5}
                    error={mandatoryFieldErrors.description}
                    loading={loading}
                />
                <InputField
                    label={'Name (optional)'}
                    value={issueState.creator}
                    onChange={handleChange('creator')}
                    maxLength={20}
                    loading={loading}
                />
            </div>

            {issueCreationState === 'success' &&
                <p className={styles.success}>Vielen Dank für dein Feedback!</p>
            }
            {issueCreationState === 'error' &&
                <p className={styles.error}>Etwas ist schief gegangen!</p>
            }
            {issueCreationState === 'missing input' &&
                <p className={styles.error}>Bitte gib Deinem Feedback ein prägnantes Thema und eine verständliche Beschreibung!</p>
            }
            <button className={styles.sendButton} onClick={submitIssue} type='submit'>
                Abschicken!
            </button>
        </main>
    )
}

import styles from './inputElements.module.css'

export interface InputFieldProps {
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    maxLength: number,
    maxRows?: number,
    error?: boolean,
    loading: boolean
}


export const InputField = ({ label, value, onChange, maxRows, maxLength, error, loading } : InputFieldProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
                {label}
            </label>
            {maxRows
                ? <textarea className={error ? styles.error : ''} value={value} rows={maxRows} disabled={loading} maxLength={maxLength} onChange={onChange}/>
                : <input className={error ? styles.error : ''} value={value} disabled={loading} maxLength={maxLength} onChange={onChange}/>}
            
        </div>
    );
};
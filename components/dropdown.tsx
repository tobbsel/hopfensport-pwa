import styles from './inputElements.module.css'

export interface DropdownProps {
    label: string,
    value: string,
    options: {key: string, label: string }[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    loading: boolean
}

export const Dropdown = ({ label, value, options, onChange, loading } : DropdownProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select value={value} disabled={loading} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.key} value={option.key}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};
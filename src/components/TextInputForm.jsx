

export const TextInputForm = ({ name, label, value, onChange, placeholder = '', type = "text" }) => {
    return (
        <div style={styles.container}>
            <label style={styles.label}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                style={styles.input}
            />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        padding: '5px',
        marginLeft: '25%',
        width: '50%',
    },
    label: {
        color: '#02363D',
        fontSize: '20px',
        marginBottom: '5px',
        marginLeft: '5px',
        fontStyle: 'inherit',
    },
    input: {
        border: '1px solid #68737D',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
    }
}
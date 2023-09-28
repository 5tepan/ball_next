import styles from './Button.module.css'

const Button = ({type, disabled, content}) => {
    return (
        <button
            className={styles.button}
            type={type}
            disabled={disabled}
        >
            {content}
        </button>
    )
}

export default Button
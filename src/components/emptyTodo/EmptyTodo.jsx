import styles from './EmptyTodo.module.css'

const EmptyTodo = () => {
    return (
        <div className={styles.emptyTodo}>
            Todo закончились :(
        </div>
    )
}

export default EmptyTodo
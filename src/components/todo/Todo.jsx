import styles from './Todo.module.css'

const Todo = ({title}) => {
    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default Todo
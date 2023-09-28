import {useEffect} from 'react'
import Todo from "../todo/Todo"
import {useDispatch, useSelector} from "react-redux"
import EmptyTodo from "../emptyTodo/EmptyTodo"
import {removeTodos} from "@/store/reducers/todoSlice"

import styles from './TodoList.module.css'

const TodoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todo.randomTodos)
    const todos = useSelector(state => state.todo.todos)

    useEffect(() => {
        todoList.forEach(r => {
            dispatch(removeTodos(r.id))
        })
    }, [todoList])

    return (
        <div className={styles.todoList}>
            {todos.length > 0
                ? todoList.map(todo =>
                        <Todo
                            key={todo.id}
                            title={todo.title}
                        />
                    )
                : <EmptyTodo/>
            }
        </div>
    )
}

export default TodoList
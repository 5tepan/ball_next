import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchTodos} from "@/store/reducers/todoSlice"
import Ball from "@/components/ball/Ball"
import TodoList from "@/components/todoList/TodoList"
import {useRouter} from "next/router"

const BallPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const todos = useSelector(state => state.todo.todos)
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        if (!isAuth) {
            router.push('/LoginPage')
        } else {
            dispatch(fetchTodos())
        }
    }, [isAuth])

    return (
        <div>
            <Ball todos={todos}/>
            <TodoList />
        </div>
    )
}

export default BallPage
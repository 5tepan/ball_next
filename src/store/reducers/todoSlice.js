import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', async (args, {rejectWithValue}
    ) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return response.data
    } catch (e) {
        return rejectWithValue(e)
    }
})

const initialState = {
    todos: [],
    randomTodos: [],
    error: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        saveRandomTodos: (state, action) => {
            state.randomTodos = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const {removeTodos, saveRandomTodos} = todoSlice.actions
export default todoSlice.reducer

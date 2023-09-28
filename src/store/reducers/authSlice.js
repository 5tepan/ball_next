import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (userData, {rejectWithValue}) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', userData)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Ошибка при выполнении запроса')
        }
    } catch (e) {
        return rejectWithValue(e.response?.data?.message || 'Ошибка при выполнении запроса')
    }
})

const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.isAuth = true
                state.error = false
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default authSlice.reducer

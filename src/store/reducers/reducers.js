import {combineReducers} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"
import authReducer from './authSlice'

export const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})
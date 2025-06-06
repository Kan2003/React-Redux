import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const todoSlice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (state , action) => {
            state.push({
                id : uuidv4(),
                text : action.payload,
                completed : false,
                createdAt : new Date().toISOString()
            });
        },
        editTodo : (state , action) => {
            const {id , text} = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if(todo){
                todo.text = text;
            }
        },
        deleteTodo : (state , action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo : (state , action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo , editTodo , deleteTodo , toggleTodo} = todoSlice.actions
export default todoSlice.reducer

import { configureStore } from "@reduxjs/toolkit";
import toDos from "./ToDoReducer"


export const Store = configureStore({
    reducer:{
   todos: toDos
    }
})
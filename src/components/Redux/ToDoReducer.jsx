import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const ToDoSlice = createSlice({
    name: "ToDoApp",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload);
        },
        remove: (state, action) => {
            state.list = state.list.filter(item => item !== action.payload);
        },
        editItem: (state, action) => {
            const { id, newText } = action.payload; 
            const index = state.list.findIndex(item => item.id === id);
            if (index !== -1) {
                state.list[index] = { ...state.list[index], text: newText };
            }
        },
    },
});

export default ToDoSlice.reducer; 
export const { addItem, remove, editItem } = ToDoSlice.actions; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits.push(action.payload);
        },
        removeHabit: (state, action) => {
            const index = state.habits.findIndex((h) => h.id === action.payload.id);
            if (index !== -1) {
                state.habits.splice(index, 1);
            }
        }
        
    }
})


export const { addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer
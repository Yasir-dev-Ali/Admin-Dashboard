import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push({ id: uuidv4(), ...action.payload });
        },
        editUser: (state, action) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) state[index] = action.payload;
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
    },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

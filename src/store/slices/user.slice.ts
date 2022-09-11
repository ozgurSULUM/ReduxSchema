import { createSlice } from '@reduxjs/toolkit';

const initialUser: User = {
    userId: '',
    userName: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setUser: (state, action: {payload: User, type: string}) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
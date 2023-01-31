import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    email: ' ',
}

export type userProps = {
    user: {
        email: string,
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        putUser(state, action: PayloadAction<userProps>) {
            const {user} = action.payload
            state = user;
        }
    }
})

export const selectAllUsers = (state :userProps) => state.user;

export default userSlice.reducer
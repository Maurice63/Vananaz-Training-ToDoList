import { nanoid, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { 
    id: nanoid(),
    username: 'UserName',
    password: "password",
}

export type userProps = {
    user: {
        id: string,
        username: string,
        password: string,
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
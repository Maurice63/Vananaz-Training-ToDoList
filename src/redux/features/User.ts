import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    uid: '',
}

export type userProps = {
        uid: string,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        putUser(state, action: PayloadAction<userProps>) {
            state.uid = action.payload.uid
        }
        ,removeUser(state, action){
            state.uid = ''
        }
    }
})

export const selectAllUsers = (state :userProps) => state.uid;

export const {putUser,removeUser } = userSlice.actions

export default userSlice.reducer
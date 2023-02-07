import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: userProps = {
  uid: "",
  isloading: false,
};

export type userProps = {
  uid: string;
  isloading: boolean;
};

export type user = {
  user: userProps;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    putUser(state, action: PayloadAction<userProps>) {
      const newUser = action.payload;
      state.uid = newUser.uid;
    },
    removeUser(state, action) {
      state.uid = "";
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isloading = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { putUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

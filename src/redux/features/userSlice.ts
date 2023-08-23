import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "@/models/entities/UserModel";
import { Nullable } from "@/models";

export const initialUserState: Nullable<UserModel> = {
  companyName: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  address: null,
  avatar: null,
};

const authSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      const {
        companyName,
        firstName,
        lastName,
        email,
        phone,
        address,
        avatar,
      } = action.payload;
      state.companyName = companyName;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
    },
    resetUser(state: any) {
      state = initialUserState;
    },
  },
});

export const { setUser } = authSlice.actions;
export const UserSliceReducer = authSlice.reducer;

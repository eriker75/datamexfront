import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    authToken: string | null;
    refreshToken: string | null;
}
  
export const initialAuthState: AuthState = { 
    isLoggedIn: false,
    authToken: localStorage.getItem('authToken'),
    refreshToken: localStorage.getItem('refreshToken'),
}

export interface TokenPayload {
    authToken: string;
    refreshToken: string;
}
  
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action: PayloadAction<TokenPayload>) {
            state.isLoggedIn = true;
            state.authToken = action.payload.authToken;
            state.refreshToken = action.payload.refreshToken;
        },
        logout(state) {
            state = initialAuthState;
        },
        refresh(state, action: PayloadAction<TokenPayload>) {
            state.authToken = action.payload.authToken;
            state.refreshToken = action.payload.refreshToken;
        }
    },
})
  
export const { login, logout, refresh } = authSlice.actions
export const AuthSliceReducer = authSlice.reducer
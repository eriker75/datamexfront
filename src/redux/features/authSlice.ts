import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import jsCookie from 'js-cookie';

export interface AuthState {
    isLoggedIn: boolean;
    authToken: string | undefined | null;
    refreshToken: string | undefined | null;
}
  
export const initialAuthState: AuthState = { 
    isLoggedIn: Boolean(jsCookie.get('isLoggedIn')),
    authToken: jsCookie.get('authToken'),
    refreshToken: jsCookie.get('refreshToken'),
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
            jsCookie.set('authToken', action.payload.authToken);
            jsCookie.set('refreshToken', action.payload.refreshToken);
            jsCookie.set('isLoggedIn', "true");
            console.log("login")
        },
        logout(state) {
            state = initialAuthState;
            jsCookie.remove('authToken');
            jsCookie.remove('refreshToken');
            jsCookie.remove('isLoggedIn');
        },
        refresh(state, action: PayloadAction<TokenPayload>) {
            state.authToken = action.payload.authToken;
            state.refreshToken = action.payload.refreshToken;
            jsCookie.set('authToken', action.payload.authToken);
            jsCookie.set('refreshToken', action.payload.refreshToken);
        }
    },
})
  
export const { login, logout, refresh } = authSlice.actions
export const AuthSliceReducer = authSlice.reducer
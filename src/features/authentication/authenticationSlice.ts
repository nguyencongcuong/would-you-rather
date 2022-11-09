import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthenticationState {
    id: string | undefined;
}

const initialState: AuthenticationState = {
    id: ''
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            console.log('id state', id);
            state.id = id;
        },

        logout: (state) => {
            state.id = '';
        },

    },
});

export const { login, logout } = authenticationSlice.actions;

export const selectAuthentication = (state: RootState) => state.authentication;

export default authenticationSlice.reducer;

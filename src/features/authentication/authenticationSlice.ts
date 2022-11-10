import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LOCAL_STORAGE_KEY } from '../../app/constants/keys';

export interface AuthenticationState {
    id: string;
}

const initialState: AuthenticationState = {
    id: '',
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            state.id = id;

            localStorage.setItem(LOCAL_STORAGE_KEY.ID, id)
        },

        logout: (state) => {
            state.id = '';

            localStorage.clear();
        },

    },
});

export const { login, logout } = authenticationSlice.actions;

export const selectAuthentication = (state: RootState) => state.authentication;

export default authenticationSlice.reducer;

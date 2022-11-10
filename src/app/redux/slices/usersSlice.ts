import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserI, UsersI } from '../../models/UserModel';
import { users } from '../../__mock/users.mock';

export type UsersState = UsersI

const initialState: UsersState = users;

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => {
            state = users;
        },

        updateUser: (state, action: PayloadAction<{ user: UserI }>) => {
            const { user } = action.payload;

            state[user.id] = user;
        }
    },
});

export const { getUsers, updateUser } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;

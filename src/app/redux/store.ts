import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authenticationReducer from './slices/authenticationSlice';
import userListReducer from './slices/usersSlice';
import questionsReducer from './slices/questionsSlice';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        users: userListReducer,
        questions: questionsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

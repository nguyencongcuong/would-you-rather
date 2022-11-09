import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import userListReducer from '../features/users/usersSlice';
import questionsReducer from '../features/questions/questionsSlice';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        users: userListReducer,
        questions: questionsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

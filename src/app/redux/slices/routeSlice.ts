import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface RouteState {
    path: string[]
}

const initialState: RouteState = {
    path: []
};

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        addRouteHistory: (state, action: PayloadAction<{path: string}>) => {
            const { path } = action.payload;
            if(state.path[0] !== path) {
                state.path.unshift(path);
            }
        },
    }
});

export const { addRouteHistory } = routeSlice.actions;

export const selectRoutes = (state: RootState) => state.route;

export default routeSlice.reducer;

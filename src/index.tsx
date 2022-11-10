import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { LoginRoute } from './routes/LoginRoute';
import { Root } from './routes/Root';
import { createRoot } from 'react-dom/client';
import { ErrorRoute } from './routes/ErrorRoute';
import { NewPollRoute } from './routes/NewPollRoute';
import { LeaderBoardRoute } from './routes/LeaderBoardRoute';
import { PollResultRoute } from './routes/PollResultRoute';
import { ROUTE } from './app/constants/route';

const router = createBrowserRouter([
    {
        path: ROUTE.HOME,
        element: <Root/>,
        errorElement: <ErrorRoute />
    },
    {
        path: ROUTE.NEW_POLL,
        element: <NewPollRoute/>
    },
    {
        path: ROUTE.LEADER_BOARD,
        element: <LeaderBoardRoute/>
    },
    {
        path: ROUTE.LOGIN,
        element: <LoginRoute/>
    },
    {
        path: ROUTE.POLL_RESULT,
        element: <PollResultRoute />,
    },
    {
        path: ROUTE.PAGE_NOT_FOUND,
        element: <ErrorRoute />
    }
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);

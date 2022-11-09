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
import { pollResultLoader, PollResultRoute } from './routes/PollResultRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorRoute/>
    },
    {
        path: 'add',
        element: <NewPollRoute/>
    },
    {
        path: 'leader-board',
        element: <LeaderBoardRoute/>
    },
    {
        path: 'login',
        element: <LoginRoute/>
    },
    {
        path: 'questions/:question_id',
        element: <PollResultRoute />,
        loader: pollResultLoader
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

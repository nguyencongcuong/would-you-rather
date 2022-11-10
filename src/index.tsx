import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import './index.css';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { LoginPage } from './app/pages/LoginPage';
import { HomePage } from './app/pages/HomePage';
import { createRoot } from 'react-dom/client';
import { ErrorPage } from './app/pages/ErrorPage';
import { NewPollPage } from './app/pages/NewPollPage';
import { LeaderBoardPage } from './app/pages/LeaderBoardPage';
import { PollResultPage } from './app/pages/PollResultPage';
import { Routes } from './app/constants/routes';

const router = createBrowserRouter([
    {
        path: Routes.HOME,
        element: <HomePage/>,
        errorElement: <ErrorPage />
    },
    {
        path: Routes.NEW_POLL,
        element: <NewPollPage/>
    },
    {
        path: Routes.LEADER_BOARD,
        element: <LeaderBoardPage/>
    },
    {
        path: Routes.LOGIN,
        element: <LoginPage/>
    },
    {
        path: Routes.POLL_RESULT,
        element: <PollResultPage />,
    },
    {
        path: Routes.PAGE_NOT_FOUND,
        element: <ErrorPage />
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

import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { useAppSelector } from '../redux/hooks';
import { selectAuthentication } from '../redux/slices/authenticationSlice';
import { Layout } from '../components/Layout';
import { selectRoutes } from '../redux/slices/routeSlice';

export const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    const authentication = useAppSelector(selectAuthentication);
    const routeHistory = useAppSelector(selectRoutes);

    return (
        authentication.id ?
            <Layout>
                <div className={'flex flex-col items-center'}>
                    <h1 className={'text-2xl font-bold'}>404</h1>
                    <p>You're trying to access URL: {routeHistory.path[1]}</p>
                    <p>Sorry, this page was removed or has never been existed!</p>
                    <button
                        onClick={() => navigate(Routes.HOME)}
                        className={'bg-gray-100 rounded p-2'}
                    >
                        Back to Home Page
                    </button>
                </div>
            </Layout>
            : <Navigate to={Routes.LOGIN} replace={true}/>
    );
};

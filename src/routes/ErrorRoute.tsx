import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../app/constants/route';

export const ErrorRoute: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={'w-screen h-screen flex flex-col justify-center items-center p-4'}>
            <h1 className={'text-2xl font-bold'}>404</h1>
            <p>Sorry, this page was removed or has never been existed!</p>
            <button onClick={() => navigate(ROUTE.HOME)} className={'bg-gray-100 rounded p-2'}>Back to Home Page</button>
        </div>
    );
};

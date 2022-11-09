import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorRoute: React.FC = () => {
    const error: any = useRouteError();

    return (
        <div className={'w-screen h-screen flex flex-col justify-center items-center'}>
            <h1 className={'text-2xl font-bold'}>404</h1>
            <p>Sorry, this page was removed or has never been existed!</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

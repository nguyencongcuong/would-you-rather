import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { logout } from './authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../app/constants/route';

export const Logout: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logout());
        navigate(ROUTE.LOGIN);
    };

    return (
        <button onClick={handleClick}>Logout</button>
    );
};

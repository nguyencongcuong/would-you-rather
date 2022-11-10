import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../constants/routes';

export const Logout: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logout());
        navigate(Routes.LOGIN);
    };

    return (
        <button onClick={handleClick}>Logout</button>
    );
};

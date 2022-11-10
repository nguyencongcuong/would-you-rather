import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { login } from '../redux/slices/authenticationSlice';
import { Routes } from '../constants/routes';
import { Col, Row } from 'antd';
import { LOCAL_STORAGE_KEY } from '../constants/keys';
import { addRouteHistory } from '../redux/slices/routeSlice';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = localStorage.getItem(LOCAL_STORAGE_KEY.ID);
        id ? dispatch(login({ id })) : navigate(Routes.LOGIN);
        dispatch(addRouteHistory({ path: location.pathname }));
    }, []);

    return (
        <Row>
            <Col xs={24}>
                <Navigation/>
            </Col>

            <Col span={12} offset={6}>
                {children}
            </Col>
        </Row>
    );
};

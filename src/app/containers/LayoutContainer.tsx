import React, { useEffect } from 'react';
import { NavigationContainer } from './NavigationContainer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { login } from '../../features/authentication/authenticationSlice';
import { ROUTE } from '../constants/route';
import { Col, Row } from 'antd';
import { LOCAL_STORAGE_KEY } from '../constants/keys';

interface LayoutProps {
    children: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = localStorage.getItem(LOCAL_STORAGE_KEY.ID);
        id ? dispatch(login({id})) : navigate(ROUTE.LOGIN)
    }, []);

    return (
        <Row>
            <Col xs={24}>
                <NavigationContainer/>
            </Col>

            <Col span={12} offset={6}>
                {children}
            </Col>
        </Row>
    );
};

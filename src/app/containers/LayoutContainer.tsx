import React, { useEffect } from 'react';
import { NavigationContainer } from './NavigationContainer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectAuthentication } from '../../features/authentication/authenticationSlice';
import { ROUTE } from '../constants/route';
import { Col, Row } from 'antd';

interface LayoutProps {
    children: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    const navigate = useNavigate();
    const authentication = useAppSelector(selectAuthentication);

    useEffect(() => {
        if (!authentication.id) {
            navigate(ROUTE.LOGIN);
            return;
        }
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

import React from 'react';
import { Col, Row, Space, Typography } from 'antd';
import { Login } from '../features/authentication/Login';
import { LayoutContainer } from '../app/containers/LayoutContainer';

export interface SelectOption {
    value: string,
    label: string
}

export const LoginRoute: React.FC = () => {
    return (
        <LayoutContainer>
            <Row className={'bg-gray-50'}>
                <Col span={12}>
                    <img
                        className={'object-cover w-full h-full'}
                        src={'https://unsplash.com/photos/-SO3JtE3gZo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHx8fDE2Njc1ODAxNjU&force=true&w=2400'}
                        alt={'LoginRoute Image Cover'}
                    />
                </Col>
                <Col span={12}>

                    <Space direction={'vertical'} className={'p-8'}>
                        <Typography.Title>Would You Rather?</Typography.Title>
                        <Typography.Paragraph>Please sign in to play.</Typography.Paragraph>
                        <Login/>
                    </Space>

                </Col>
            </Row>
        </LayoutContainer>
    );
};

import React from 'react';
import { Col, Row, Space, Typography } from 'antd';
import { Login } from '../components/Login';
import { Layout } from '../components/Layout';

export interface SelectOption {
    value: string,
    label: string
}

export const LoginPage: React.FC = () => {
    return (
        <Layout>
            <Row className={'bg-gray-50'}>
                <Col span={12}>
                    <img
                        className={'object-cover w-full h-full'}
                        src={'https://unsplash.com/photos/-SO3JtE3gZo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHx8fDE2Njc1ODAxNjU&force=true&w=2400'}
                        alt={'LoginPage Image Cover'}
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
        </Layout>
    );
};

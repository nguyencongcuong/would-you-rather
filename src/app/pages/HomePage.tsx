import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Tabs } from 'antd';
import { UnAnsweredPolls } from '../components/UnAnsweredPolls';
import { AnsweredPolls } from '../components/AnsweredPolls';
import { useAppDispatch } from '../redux/hooks';
import { getQuestions } from '../redux/slices/questionsSlice';

export const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    const items = [
        {
            label: 'Unanswered Questions',
            key: 'unanswered-questions',
            children: <UnAnsweredPolls/>
        },
        {
            label: 'Answered Questions',
            key: 'answered-questions',
            children: <AnsweredPolls/>
        },
    ];

    useEffect(() => {
        dispatch(getQuestions());
    }, []);

    return (
        <Layout>
            <Tabs items={items}/>
        </Layout>
    );
};

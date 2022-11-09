import React, { useEffect } from 'react';
import { LayoutContainer } from '../app/containers/LayoutContainer';
import { Tabs } from 'antd';
import { UnAnsweredQuestionsContainer } from '../app/containers/UnAnsweredQuestionsContainer';
import { AnsweredQuestionsContainer } from '../app/containers/AnsweredQuestionsContainer';
import { useAppDispatch } from '../app/hooks';
import { getQuestions } from '../features/questions/questionsSlice';

export const Root: React.FC = () => {
    const dispatch = useAppDispatch();

    const items = [
        {
            label: 'Unanswered Questions',
            key: 'unanswered-questions',
            children: <UnAnsweredQuestionsContainer/>
        },
        {
            label: 'Answered Questions',
            key: 'answered-questions',
            children: <AnsweredQuestionsContainer/>
        },
    ];

    useEffect(() => {
        dispatch(getQuestions());
    }, []);

    return (
        <LayoutContainer>
            <Tabs items={items}/>
        </LayoutContainer>
    );
};

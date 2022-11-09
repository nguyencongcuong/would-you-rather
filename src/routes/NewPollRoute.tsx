import React, { useState } from 'react';
import { LayoutContainer } from '../app/containers/LayoutContainer';
import { v4 as uuidv4 } from 'uuid';
import { Card, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUsers, updateUser } from '../features/users/usersSlice';
import { addQuestion } from '../features/questions/questionsSlice';
import { selectAuthentication } from '../features/authentication/authenticationSlice';
import { cloneDeep } from 'lodash';
import { UserI } from '../app/models/user.model';
import { QuestionI } from '../app/models/question.model';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../app/constants/route';

export const NewPollRoute = () => {
    const users = useAppSelector(selectUsers);
    const authentication = useAppSelector(selectAuthentication);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [optionOne, setOptionOne] = useState<string>('');
    const [optionTwo, setOptionTwo] = useState<string>('');

    const handleOptionOne = (e: any) => setOptionOne(e.target.value);

    const handleOptionTwo = (e: any) => setOptionTwo(e.target.value);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (authentication.id) {
            const questionId = uuidv4();

            let updatedUser: UserI = cloneDeep(users[authentication.id]);
            updatedUser.questions = updatedUser.questions.concat(questionId);

            const newQuestion: QuestionI = {
                id: questionId,
                author: authentication.id,
                timestamp: new Date().getTime(),
                optionOne: {
                    text: optionOne,
                    votes: [],
                },
                optionTwo: {
                    text: optionTwo,
                    votes: []
                }
            };

            dispatch(updateUser({ user: updatedUser }));
            dispatch(addQuestion({ id: questionId, question: newQuestion }));

            navigate(ROUTE.HOME);
        }
    };

    return (
        <LayoutContainer>

            <Card title={'Create New Question'}>
                <h3 className={'mb-4'}>Would you rather:</h3>

                <form onSubmit={handleSubmit} className={'flex flex-col gap-4'}>
                    <label>
                        <span className="">Option 1</span>
                        <Input type={'text'} value={optionOne} onChange={handleOptionOne} required/>
                    </label>

                    <label>
                        <span>Option 2</span>
                        <Input type={'text'} value={optionTwo} onChange={handleOptionTwo} required/>
                    </label>
                    <button type={'submit'}>Submit</button>
                </form>
            </Card>


            <form>
            </form>
        </LayoutContainer>
    );
};

import React from 'react';
import { Poll } from './Poll';
import { useAppSelector } from '../redux/hooks';
import { selectQuestions } from '../redux/slices/questionsSlice';
import { selectUsers } from '../redux/slices/usersSlice';
import { selectAuthentication } from '../redux/slices/authenticationSlice';

export const AnsweredPolls = () => {
    const questions = useAppSelector(selectQuestions);
    const users = useAppSelector(selectUsers);
    const authentication = useAppSelector(selectAuthentication);

    return (
        <div className={'flex flex-col gap-4'}>
            {
                Object
                .entries(questions)
                .filter(([key, value]) => {
                    if (authentication.id) {
                        const answeredQuestions = Object.keys(users[authentication.id].answers);
                        return answeredQuestions.includes(key);
                    } else {
                        return false;
                    }
                })
                .sort(([keyA, valueA], [keyB, valueB]) => {
                    return valueB.timestamp - valueA.timestamp
                })
                .map(([key, value]) => {
                        const user = users[value.author];
                        return (
                            <Poll
                                key={key}
                                user={user}
                                question={value}
                                answered={true}
                            />
                        );
                    }
                )
            }
        </div>
    );
};

import React from 'react';
import { Poll } from '../components/Poll';
import { useAppSelector } from '../hooks';
import { selectQuestions } from '../../features/questions/questionsSlice';
import { selectUsers } from '../../features/users/usersSlice';
import { selectAuthentication } from '../../features/authentication/authenticationSlice';

export const AnsweredQuestionsContainer = () => {
    const questions = useAppSelector(selectQuestions);
    const users = useAppSelector(selectUsers);
    const authentication = useAppSelector(selectAuthentication);

    if (authentication.id) {
        const currentUser = users[authentication.id];
    }

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

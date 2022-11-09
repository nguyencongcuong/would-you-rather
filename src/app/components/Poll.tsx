import React, { useState } from 'react';
import { UserI } from '../models/user.model';
import { QuestionI } from '../models/question.model';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAuthentication } from '../../features/authentication/authenticationSlice';
import { selectUsers, updateUser } from '../../features/users/usersSlice';
import { cloneDeep } from 'lodash';
import { updateQuestion } from '../../features/questions/questionsSlice';
import { useNavigate } from 'react-router-dom';

interface PoolProps {
    user: UserI,
    question: QuestionI,
    answered: boolean,
}

export const Poll: React.FC<PoolProps> = ({ user, question, answered }: PoolProps) => {
    const CHOICE_1 = 'optionOne';
    const CHOICE_2 = 'optionTwo';

    const [choice, setChoice] = useState<string>(CHOICE_1);

    const authentication = useAppSelector(selectAuthentication);
    const users = useAppSelector(selectUsers);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleChange = (e: any) => e.target.value === question.optionOne.text ? setChoice(CHOICE_1) : setChoice(CHOICE_2);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (authentication.id) {
            let updatedUser = cloneDeep(users[authentication.id]);
            let updatedQuestion = cloneDeep(question);

            updatedUser.answers[question.id] = choice;

            choice === CHOICE_1
                ? updatedQuestion.optionOne.votes.push(authentication.id)
                : updatedQuestion.optionTwo.votes.push(authentication.id);

            navigate(`questions/${question.id}`);

            dispatch(updateUser({ user: updatedUser }));
            dispatch(updateQuestion({ question: updatedQuestion }));
        }
    };

    return (
        <div className={'flex flex-col'}>
            <div className="bg-gray-50 p-4">{question.author} asks:</div>
            <div className="bg-gray-100 flex p-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img src={user.avatarURL} alt={user.name}/>
                </div>
                <div className="flex flex-col justify-between px-4 w-full">
                    <div className="font-bold mb-4">Would you rather:</div>

                    {
                        answered
                            ?
                            <div>
                                <div className="">
                                    <div className="">- {question.optionOne.text}?</div>
                                    <div className="">- {question.optionTwo.text}?</div>
                                </div>
                                <button
                                    className={'bg-gray-600 text-gray-50 w-full rounded h-8 mt-4'}
                                    onClick={() => navigate(`questions/${question.id}`)}
                                >
                                    View Poll Result
                                </button>
                            </div>

                            :
                            <form className={'flex flex-col gap-2 my-2 w-full'} onSubmit={handleSubmit}>
                                <label className={'flex gap-4'}>
                                    <input
                                        type={'radio'}
                                        name={'option'}
                                        value={question.optionOne.text}
                                        onChange={handleChange}
                                        defaultChecked
                                    />
                                    {question.optionOne.text}
                                </label>

                                <label className={'flex gap-4'}>
                                    <input
                                        type={'radio'}
                                        name={'option'}
                                        value={question.optionTwo.text}
                                        onChange={handleChange}
                                    />
                                    {question.optionTwo.text}
                                </label>

                                <button className={'bg-gray-600 text-gray-50 w-full rounded h-8 mt-4'} type={'submit'}>Submit</button>
                            </form>
                    }
                </div>
            </div>
        </div>
    );
};

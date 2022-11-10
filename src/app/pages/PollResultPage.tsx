import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Progress } from 'antd';
import { Layout } from '../components/Layout';
import { useAppSelector } from '../redux/hooks';
import { selectUsers } from '../redux/slices/usersSlice';
import { selectQuestions } from '../redux/slices/questionsSlice';
import { numberUtil } from '../utils/NumberUtil';
import { Routes } from '../constants/routes';

export const PollResultPage = () => {
    const params = useParams();

    const users = useAppSelector(selectUsers);
    const questions = useAppSelector(selectQuestions);
    const question = params.question_id ? questions[params.question_id] : undefined;

    return (

        <Layout>
            {
                question ?
                    <div className={'rounded p-4'}>
                        <div className="flex justify-center items-center mx-auto rounded-full overflow-hidden w-20 h-20 mb-2">
                            { users[question.author] && <img src={users[question.author].avatarURL} alt={question.author}/> }
                        </div>
                        <div className="text-center mb-4">{ users[question.author] && users[question.author].name } asked:</div>
                        <div className="bg-white rounded mb-2 p-2 w-3/4">
                            <div className="">Would you rather {question.optionOne.text}?</div>
                            <Progress percent={numberUtil.calculatePercentage(question.optionOne.votes.length, question.optionTwo.votes.length)}/>
                            <div
                                className="">{question.optionOne.votes.length} / {(question.optionOne.votes.length + question.optionTwo.votes.length)} votes
                            </div>
                        </div>

                        <div className="bg-white rounded mb-2 p-2 w-3/4">
                            <div className="">Would you rather {question.optionTwo.text}?</div>
                            <Progress
                                percent={numberUtil.calculatePercentage(question.optionTwo.votes.length, question.optionOne.votes.length)}/>
                            <div
                                className="">{question.optionTwo.votes.length} / {(question.optionOne.votes.length + question.optionTwo.votes.length)} votes
                            </div>
                        </div>
                    </div>
                    : <Navigate to={Routes.PAGE_NOT_FOUND} replace={true} />
            }
        </Layout>
    );
};

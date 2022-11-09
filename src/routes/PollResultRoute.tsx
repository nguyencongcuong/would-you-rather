import React from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import { LayoutContainer } from '../app/containers/LayoutContainer';
import { useAppSelector } from '../app/hooks';
import { selectUsers } from '../features/users/usersSlice';
import { selectQuestions } from '../features/questions/questionsSlice';
import { numberUtil } from '../app/utils/number.util';

interface Params {
    params: any;
}

export async function pollResultLoader({ params }: Params) {
    return params.question_id;
}

export const PollResultRoute = () => {

    const params = useParams();
    const users = useAppSelector(selectUsers);
    const questions = useAppSelector(selectQuestions);

    const question = params.question_id ? questions[params.question_id] : null;

    return (

        <LayoutContainer>

            {
                question ?
                    <div className={'rounded p-4'}>
                        <div className="flex justify-center items-center mx-auto rounded-full overflow-hidden w-20 h-20 mb-2">
                            <img src={users[question.author].avatarURL} alt={question.author}/>
                        </div>
                        <div className="text-center mb-4">{users[question.author].name} asked:</div>
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
                    : null
            }

        </LayoutContainer>
    );
};

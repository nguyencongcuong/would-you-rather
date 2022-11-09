import React from 'react';
import { LayoutContainer } from '../app/containers/LayoutContainer';
import { useAppSelector } from '../app/hooks';
import { selectUsers } from '../features/users/usersSlice';
import { transform } from 'lodash';
import { UserI } from '../app/models/user.model';
import { Col, Row } from 'antd';

interface LeaderBoardItemI {
    answeredQuestions: number,
    createdQuestions: number,
    score: number,
    name: string,
    avatarURL: string
}

export const LeaderBoardRoute = () => {
    const users = useAppSelector(selectUsers);

    const transformedUsers: LeaderBoardItemI[] = transform(users, (result: LeaderBoardItemI[], value: UserI) => {
        const transformedUser: LeaderBoardItemI = {
            answeredQuestions: Object.keys(value.answers).length,
            createdQuestions: value.questions.length,
            score: Object.keys(value.answers).length + value.questions.length,
            name: value.name,
            avatarURL: value.avatarURL
        };

        result.push(transformedUser);
    }, []);

    const sortedTransformedUser = transformedUsers.sort((a, b) => b.score - a.score);

    return (
        <LayoutContainer>
            {
                sortedTransformedUser.length
                    ?
                    sortedTransformedUser.map((user, index) => {
                        return (
                            <Row key={index} className={'bg-neutral-50 rounded mb-4 p-4'}>
                                <Col span={6} className={'flex justify-center items-center'}>
                                    <img
                                        className={'rounded'}
                                        width={'100px'}
                                        height={'100px'}
                                        src={user.avatarURL}
                                        alt={user.name}
                                    />
                                </Col>
                                <Col span={12} className={'p-4'}>


                                    <div className={'flex gap-2 font-bold text-xl mb-4'}>
                                        {user.name}
                                        <img
                                            className={'w-6 h-6'}
                                            src={index === 0 ? '/gold-medal.png' : index === 1 ? '/silver-medal.png' : index === 2 ? '/bronze-medal.png' : ''}
                                            alt={user.name}
                                        />
                                    </div>
                                    <div className={'flex justify-between'}>
                                        <div className="">Answered Questions</div>
                                        <div className="">{user.answeredQuestions}</div>
                                    </div>
                                    <div className={'flex justify-between'}>
                                        <div className={''}>Created Questions</div>
                                        <div className={''}>{user.createdQuestions}</div>
                                    </div>
                                </Col>
                                <Col span={6} className={'flex justify-center items-center'}>
                                    <div className={'bg-green-400 flex flex-col justify-center items-center p-2 text-center h-full'}>
                                        <div className="font-bold text-gray-50">Score</div>
                                        <div className="text-2xl font-bold text-gray-50">{user.score}</div>
                                    </div>
                                </Col>
                            </Row>
                        );
                    })
                    :
                    null
            }
        </LayoutContainer>
    );
};

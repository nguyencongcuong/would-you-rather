import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { useAppSelector } from '../redux/hooks';
import { selectAuthentication } from '../redux/slices/authenticationSlice';
import { Logout } from './Logout';
import { selectUsers } from '../redux/slices/usersSlice';

export const Navigation = () => {
    const authentication = useAppSelector(selectAuthentication);
    const users = useAppSelector(selectUsers);

    const currentUser = authentication.id ? users[authentication.id] : null;

    return (
        <React.Fragment>
            {
                currentUser
                    ?
                    <div className={'flex gap-4 justify-center items-center p-4'}>
                        <Link to={Routes.HOME} children={'Home'}/>
                        <Link to={Routes.NEW_POLL} children={'New Questions'}/>
                        <Link to={Routes.LEADER_BOARD} children={'Leader Board'}/>
                        <div className="flex justify-center items-center gap-2 ml-4">
                            <div className="">Hello, {currentUser.name}</div>
                            <img className={'w-6 h-6 rounded-full'} src={currentUser.avatarURL} alt={currentUser.name}/>
                        </div>
                        <Logout/>
                    </div>
                    :
                    <div className={'flex gap-4 justify-center items-center p-4'}>
                        <Link to={Routes.LOGIN} children={'Login'}/>
                    </div>
            }
        </React.Fragment>

    );
};

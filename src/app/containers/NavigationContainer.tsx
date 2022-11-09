import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../constants/route';
import { useAppSelector } from '../hooks';
import { selectAuthentication } from '../../features/authentication/authenticationSlice';
import { Logout } from '../../features/authentication/Logout';
import { selectUsers } from '../../features/users/usersSlice';

export const NavigationContainer = () => {
    const authentication = useAppSelector(selectAuthentication);
    const users = useAppSelector(selectUsers);

    const currentUser = authentication.id ? users[authentication.id] : null;

    return (
        <React.Fragment>
            {
                currentUser
                    ?
                    <div className={'flex gap-4 justify-center items-center p-4'}>
                        <Link to={ROUTE.HOME} children={'Home'}/>
                        <Link to={ROUTE.NEW_POLL} children={'New Questions'}/>
                        <Link to={ROUTE.LEADER_BOARD} children={'Leader Board'}/>
                        <div className="flex justify-center items-center gap-2 ml-4">
                            <div className="">Hello, {currentUser.name}</div>
                            <img className={'w-6 h-6 rounded-full'} src={currentUser.avatarURL} alt={currentUser.name}/>
                        </div>
                        <Logout/>
                    </div>
                    :
                    <div className={'flex gap-4 justify-center items-center p-4'}>
                        <Link to={ROUTE.LOGIN} children={'Login'}/>
                    </div>
            }
        </React.Fragment>

    );
};

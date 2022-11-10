import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { SelectOption } from '../pages/LoginPage';
import { UserI } from '../models/UserModel';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../redux/slices/authenticationSlice';
import { getUsers, selectUsers } from '../redux/slices/usersSlice';
import { transform } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { selectRoutes } from '../redux/slices/routeSlice';

export const Login: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<SelectOption>({ value: '', label: '' });
    const [selectOptions, setSelectOptions] = useState<SelectOption[]>([]);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const users = useAppSelector(selectUsers);
    const routeHistory = useAppSelector(selectRoutes);

    const handleChange = (userId: string) => {
        const user = selectOptions.find(item => item.value === userId);
        if (user) {
            setSelectedUser(user);
        }
    };

    const handleLogin = () => {
        const id = selectedUser.value;
        dispatch(login({ id }));
        const previousRoute = routeHistory.path[1];
        previousRoute ? navigate(previousRoute) : navigate(Routes.HOME);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        const options: SelectOption[] = transform(users, (acc: SelectOption[], value: UserI, key: string) => {
            const option: SelectOption = {
                value: value.id,
                label: value.name
            };
            return acc.push(option);
        }, []);
        setSelectOptions(options);
    }, [users]);

    return (
        <div>
            {
                selectOptions.length ?
                    <Select
                        defaultValue={selectedUser.value}
                        onChange={handleChange}
                        options={selectOptions}
                        className={'w-48'}
                    />
                    : null
            }
            <Button onClick={handleLogin}>Log in</Button>
        </div>
    );
};

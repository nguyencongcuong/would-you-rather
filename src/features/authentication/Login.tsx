import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { SelectOption } from '../../routes/LoginRoute';
import { UserI } from '../../app/models/user.model';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from './authenticationSlice';
import { getUsers, selectUsers } from '../users/usersSlice';
import { transform } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../app/constants/route';

export const Login: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<SelectOption>({ value: '', label: '' });
    const [selectOptions, setSelectOptions] = useState<SelectOption[]>([]);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);

    const handleChange = (userId: string) => {
        const user = selectOptions.find(item => item.value === userId);
        if (user) {
            setSelectedUser(user);
        }
    };

    const handleLogin = () => {
        const id = selectedUser.value;
        dispatch(login({ id }));
        navigate(ROUTE.HOME);
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

        setSelectedUser(options[0]);
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

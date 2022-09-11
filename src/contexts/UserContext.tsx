import React, { createContext, useEffect, useState } from 'react'
import { userModel } from '../$firebase';
import { IUser } from '../types'

export const UserContext = createContext<IUser[]>([]);

type Props = {
    children: JSX.Element
}

export const UserContextProvider = (props: Props) => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const unsubscribe = userModel.startObserver(data => {
            setUsers(data);
        });

        return () => unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    )
}

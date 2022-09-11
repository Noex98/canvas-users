import React from 'react'
import { Link } from 'react-router-dom';
import { userModel } from '../../../$firebase';
import { IUser } from '../../../types'
import './user.css'

type Props = {
    user: IUser;
}

export const User = ({user}: Props) => {
    return (
        <article className='userComponent'>
                <img src={user.avatar_url} alt={user.name} />
                <h2>{user.name}</h2>
                <a href={`mailto: ${user.email}`}>{user.email}</a>
                <p>Role: {user.enrollment_type}</p>
                <div className='userComponent__btnContainer'>
                    <Link to={`/update/${user.id}`} >Edit</Link>
                    <button onClick={() => userModel.deleteDoc(user.id)}>Delete</button>
                </div>
        </article>
    )
}

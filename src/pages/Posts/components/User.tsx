import React from 'react'
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
    </article>
  )
}

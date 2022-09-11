import React from 'react'
import { Link } from 'react-router-dom';

import './header.css';

export const Header = () => {



    return (
        <header>
            <Link className='header__logo' to={'/'}>Canvas users</Link>
            <Link className='header__create' to={'/create'}>Add user</Link>
        </header>
    )
}

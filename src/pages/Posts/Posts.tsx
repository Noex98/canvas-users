import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../components';
import { UserContext } from '../../contexts/UserContext';
import { User } from './components/User';
import './posts.css';

type Filter = {
    showStudents: boolean,
    showTeachers: boolean,
    search: string,
    sort: "name" | "sortable_name" | "enrollment_type",
}

export const Posts = () => {

    const users = useContext(UserContext);
    const [filteredUsers, setFilteredUsers] = useState(users);

    const [filter, setFilter] = useState<Filter>({
        showStudents: true,
        showTeachers: true,
        search: "",
        sort: "name"
    })

    useEffect(() => {
        setFilteredUsers(() => {
            const filtered = users.filter(user => {
                if (
                    (filter.showStudents === false && user.enrollment_type === "Student") ||
                    (filter.showTeachers === false && user.enrollment_type === "Teacher") ||
                    (!user.name.toLowerCase().includes(filter.search.toLowerCase()) && filter.search.length !== 0)
                ){ return false }
                return true;
            })
            return filtered.sort((user1, user2) => user1[filter.sort].localeCompare(user2[filter.sort]))
        })
    }, [users, filter])

    function handleSortChange(e:React.ChangeEvent<HTMLSelectElement>){

        const value = e.target.value;

        if (value === "sortable_name" || value === "name" || value === "enrollment_type"){
            setFilter(prev => {
                return {...prev, sort: value}
            })
        }
    }

    return (
        <>
            <Header />
            <div className='postsPage'>
                <div className='postPage__filter'>
                    <label>
                        <span>Show Students </span>
                        <input
                            type="checkbox"
                            checked={filter.showStudents} 
                            onChange={() => setFilter(prev => { return {...prev, showStudents: !prev.showStudents}})}
                        />
                    </label>
                    <label>
                        <span>Show Teachers </span>
                        <input 
                            type="checkbox"
                            checked={filter.showTeachers}
                            onChange={() => setFilter(prev => { return {...prev, showTeachers: !prev.showTeachers}})}
                        />
                    </label>
                    <label>
                        <span>Search </span>
                        <input 
                            type="text"
                            value={filter.search} placeholder='Search by name'
                            onChange={(e) => setFilter(prev => { return {...prev, search: e.target.value}})}
                        />
                    </label>
                    <label>
                        <span>Sort by </span>
                        <select 
                            value={filter.sort}
                            onChange={(e) => handleSortChange(e)}
                        >
                            <option value="name">First name</option>
                            <option value="sortable_name">Last name</option>
                            <option value="enrollment_type">Enrollment</option>
                        </select>
                    </label>
                </div>

                <div className="postPage__userContainer">
                    {filteredUsers.map((user, i) => (
                        <User user={user} key={i}/>
                    ))}
                </div>
            </div>
        </>
    )
}

import { useEffect, useState } from 'react'
import { userModel } from '../../$firebase'
import { Header } from '../../components';
import { User } from '../../types';

type Filter = {
    showStudents: boolean,
    showTeachers: boolean,
    search: string,
    sort: string,
}

export const Posts = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState(users);

    const [filter, setFilter] = useState<Filter>({
        showStudents: true,
        showTeachers: true,
        search: "",
        sort: "name"
    })

    useEffect(() => {
        const unsubscribe = userModel.startObserver(data => {
            setUsers(data);
        });

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        setFilteredUsers(() => {
            const filtered = users.filter(user => {
                if (
                    (filter.showStudents !== true && user.enrollment_type === "student") ||
                    (filter.showTeachers !== true && user.enrollment_type === "teacher") ||
                    (user.name.includes(filter.search) && filter.search.length != 0)
                ){ return false }
                return true;
            })
            return filtered
        })
        console.log(filter);
        
    }, [users, filter])

    return (
        <>
            <Header />
            <div className="userContainer">
                {filteredUsers.map((user, i) => (
                    <div key={i}>user</div>
                ))}
            </div>
            <div>
                <label>
                    Show Students
                    <input 
                        type="checkbox" 
                        checked={filter.showStudents} 
                        onChange={() => setFilter(prev => { return {...prev, showStudents: !prev.showStudents}})}
                    />
                </label>
                <label>
                    Show Teachers
                    <input 
                        type="checkbox" 
                        checked={filter.showTeachers}
                        onChange={() => setFilter(prev => { return {...prev, showTeachers: !prev.showTeachers}})}
                    />
                </label>
                <label>
                    Search
                    <input 
                        type="text" 
                        value={filter.search} placeholder='Search by name'
                        onChange={(e) => setFilter(prev => { return {...prev, search: e.target.value}})}
                    />
                </label>
                <label>
                    Sort by
                    <select 
                        value={filter.sort} 
                        onChange={(e) => setFilter(prev => {return {...prev, sort: e.target.value}})}
                    >
                        <option value="name">First name</option>
                        <option value="sortable_name">Last name</option>
                        <option value="enrollment_type">Enrollment</option>
                    </select>
                </label>
            </div>
        </>
    )
}

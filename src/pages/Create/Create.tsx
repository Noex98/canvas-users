import React, { useState } from 'react'
import { Header } from '../../components'
import { userModel } from '../../$firebase';
import { IUserRaw } from '../../types';

export const Create = () => {

	const [pendingUser, setPendingUser] = useState<IUserRaw>({
		name: "",
		created_at: "",
		sortable_name: "",
		login_id: "xxx",
		avatar_url: "",
		email: "",
		analytics_url: "xxx",
		enrollment_type: "Student",
	})

	function handlesubmit(e: React.FormEvent){
        e.preventDefault();
		userModel.setDoc(pendingUser);
	}

	return (
		<>
			<Header />
			<div>Create new user</div>
			<form>
				<div>
					<label>
						<span>Name</span>
						<input type="text" value={pendingUser.name} onChange={(e) => setPendingUser(prev => ({ ...prev, name: e.target.value}))}/>
					</label>
				</div>
				<div>
					<label>
						<span>Email</span>
						<input type="text" value={pendingUser.email} onChange={(e) => setPendingUser(prev => ({ ...prev, email: e.target.value}))}/>
					</label>
				</div>
				<div>
					<label>
						<span>Avatar URL</span>
						<input type="text" value={pendingUser.avatar_url} onChange={(e) => setPendingUser(prev => ({ ...prev, avatar_url: e.target.value}))}/>
					</label>
				</div>
				<div>
					<label>
						<span>Enrollment</span>
						<select>
							<option value="Student">Student</option>
							<option value="Teacher">Teacher</option>
						</select>
					</label>
				</div>
				<input type="submit" onClick={handlesubmit}/>
			</form>
		</>
	)
}

import React, { useState } from 'react'
import { Header } from '../../components'
import { userModel } from '../../$firebase';
import { UserRaw } from '../../types';

export const Create = () => {

	const [pendingUser, setPendingUser] = useState<UserRaw>({
		name: "",
		created_at: "",
		sortable_name: "",
		login_id: "xxx",
		avatar_url: "",
		email: "",
		analytics_url: "xxx",
		enrollment_type: "student",
	})

	function handlesubmit(){
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
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						<span>Email</span>
						<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						<span>Avatar URL</span>
						<input type="text" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						<span>Enrollment</span>
						<select>
							<option value="student"></option>
							<option value="teacher"></option>
						</select>
					</label>
				</div>
				<input type="submit" onClick={handlesubmit}/>
			</form>
		</>
	)
}

export interface IUserRaw {
    name: string,
    created_at: string,
    sortable_name: string,
    login_id: string,
    avatar_url: string,
    email: string,
    analytics_url: string,
    enrollment_type: "Student" | "Teacher"
}

export interface IUser extends IUserRaw {
    id: string,
}
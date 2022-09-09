export interface UserRaw {
    name: string,
    created_at: string,
    sortable_name: string,
    login_id: string,
    avatar_url: string,
    email: string,
    analytics_url: string,
    enrollment_type: "student" | "teacher"
}

export interface User extends UserRaw {
    id: string,
}
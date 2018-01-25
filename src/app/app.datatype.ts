export interface  Company {
    name: string;
    type: string;
    registration_last_date: Date;
    salary_offered: string;
    sslc?: string;
    puc?: string;
    diploma?: string;
    cgpa?: string;
    dob_range_start?: Date;
    dob_range_end?: Date;
    edu_gap?: number;
    max_active_backlogs: number;
    extra?: string;
}

export interface User {
    uid: string;
    email: string;
    cgpa: number;
    puc: number;
    diploma: number;
    dob: number;
    blocked: boolean;
    edu_gap: number;
}

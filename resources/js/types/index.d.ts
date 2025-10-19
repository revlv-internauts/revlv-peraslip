import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    full_name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Employee {
    id: string;
    employee_id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    date_of_hiring: string;
    phone_number: string;
    bank_number: string;
    department_id: number;
    basic_pay: number;
    sss_number: string;
    umid_number: string;
    philhealth_number: string;
    pagibig_number: string;
    tin_number: string;
    created_at: string;
    updated_at: string;
}

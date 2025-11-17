import { LucideIcon } from "@node_modules/lucide-react/dist/lucide-react";

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface MainNavItems {
    title: string;
    url: string;
    icon?: LucideIcon | null;
}

export interface ConfigNavItems {
    title: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    subItems?: SubItems<Array>;
}

export interface SubItems {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
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

export interface Department {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Employee {
    id: number;
    employee_id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    full_name: string;
    email: string;
    date_of_hiring: string;
    phone_number: string;
    bank_number: string;
    department_id: number;
    basic_pay: number;
    sss_number: string;
    gsis_number: string;
    philhealth_number: string;
    pagibig_number: string;
    tin_number: string;
    created_at: string;
    updated_at: string;
    
    department?: Department; 
}

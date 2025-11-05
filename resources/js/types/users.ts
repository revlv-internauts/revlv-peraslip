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
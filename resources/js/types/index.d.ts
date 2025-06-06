export interface User {
    id: number;
    en_name: string;
    email: string;
    phone : string;
    email_verified_at?: string;
}
export interface Coach {
    id: number;
    user: User;
    CV: string;
    
    }

export interface Customer {
    id: number;
    user: User;
    height: number;
    weight: number;
    
    }

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
export interface BreadcrumbItem {
    title: string;
    href: string;
}

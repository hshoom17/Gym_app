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
    branch_id : number;
    CV: string;
    mediaFile?: MediaFile; 
    
    }

export interface Status{

    name : string;
    value:string

}

export interface Customer {
    id: number;
    user: User;
    height: number;
    weight: number;
    
    }

export interface WorkoutSession {
    id: number;
    start_date: string;
    end_date: string;
    type: string;
    coach: Coach;
    // coach_id: number;
    
    }

    export interface Subscription {
    id : number;
    start_date : string;
    end_date   : string;
    type    : string;
    price   : string;
    status  : string;
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
export interface MediaFile {
    id: number,
    model_type: string,
    model_id: number,
    uuid: string,
    collection_name: string,
    name: string,
    file_name: string,
    mime_type: string,
    disk: string,
    conversions_disk: string,
    size: number,
    manipulations: string[],
    custom_properties: string[],
    generated_conversions: string[],
    responsive_images: string[],
    order_column: number,
    created_at: string,
    updated_at: string,
    original_url: string,
    preview_url: string,
}

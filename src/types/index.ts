import { Database } from "./database.types";

export type Profiles=Database["public"]["Tables"]["profiles"]["Row"];

export type Testers=Database["public"]["Tables"]["testers"]["Row"];

export interface UserProfile {
    id: string;
    phone_number?: string;
    google_refresh_token?: string;
    updated_at: string;
}

export interface Updates {
    date: string;
    content: string[];
}
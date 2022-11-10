import type { User } from "./user";

export interface Comment {
    id: string;
    content: string;
    createdAt: string;
    user: User;
}

export interface Comments {
    count: number;
    next: string | null;
    results: Comment[];
}

export interface Post {
    id: string;
    content: string;
    createdAt: string;
    user: User;
    comments: Comments;
}

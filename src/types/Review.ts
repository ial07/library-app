import type { User } from "./Auth";

export interface Review {
    id:number;
    star:number;
    comment:string;
    userId:number;
    bookId:number;
    createdAt:string;
    User:User
}
import type { Pagination } from ".";
import type { Book } from "./Book";
import type { User } from "./Profile";

export interface Review {
    id:number;
    star:number;
    comment:string;
    userId:number;
    bookId:number;
    createdAt:string;
    User:User;
    Book:Book
}

export interface ReviewListResponse {
    reviews: Review[];
    pagination: Pagination
}

export interface ReviewResponse {
    review: Review;
    bookStats: {
        rating:number;
        reviewCount:number;
    }
}

export interface ReviewPayload {
    bookId:number;
    star : number;
    comment:string;
}
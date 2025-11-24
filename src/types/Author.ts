import type { Book } from "./Book";

export interface Author {
  id: string;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}


export interface ListAuthorResponse {
    authors: Author[];
}


export interface ListBooksAuthorResponse {
    author: Author;
    books?: Book[];
}
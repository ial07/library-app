import type { Pagination } from ".";
import type { Author } from "./Author";
import type { Category } from "./Category";

export interface Book {
  id: string;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  price: number;
  stock: number;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  availableCopies: number;
  borrowCount: number;
  totalCopies: number;
  Author:Author,
  Category:Category
}

export interface BookListResponse {
  books: Book[];
  pagination: Pagination;
}
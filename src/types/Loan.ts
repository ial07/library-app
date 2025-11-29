import type { Pagination } from ".";
import type { Book } from "./Book";

export interface Loan {
  id: number;
  userId: number;
  bookId: number;
  status: string;
  borrowedAt: string;
  dueAt: string;
  returnedAt?: string;
  Book: Book;
}

export interface LoansListResponse {
  loans: Loan[];
  pagination: Pagination;
}

export interface LoanResponse {
  loan: Loan;
}

export interface LoanPayload {
  bookId: number;
  days: number;
}

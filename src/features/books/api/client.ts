import { apiInstance } from "@/api/client"
import type { ApiResponse } from "@/types"
import type { Book, BookListResponse } from "@/types/Book"
import type { AxiosError } from "axios"

// Get Books
export async function getBooks(
    q?: string,
    page: number = 1,
    limit: number = 10,
    categoryId?: number,
    authorId?: number,
): Promise<ApiResponse<BookListResponse>> {
  try {
    const params: Record<string, string | number|undefined> = { page, limit };
    if(q) params.q = q;
    if (categoryId) params.categoryId = categoryId;
    if (authorId) params.authorId = authorId;

    const { data } = await apiInstance.get<ApiResponse<BookListResponse>>("/books", {
      params,
    });

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}


// Get Book By ID
export async function getBookById(
    id: string,
): Promise<ApiResponse<Book>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<Book>>(`/books/${id}`);

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}

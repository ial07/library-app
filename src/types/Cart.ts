import type { Book } from "./Book";

export interface CartItem extends Partial<Book> {
  quantity: number;
}

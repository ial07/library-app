import { Checkbox } from "@/components/ui/checkbox";
import type { CartItem } from "@/types/Cart";

interface Props {
  book: CartItem; // sesuaikan type
  selected?: string[];
  toggleCheck?: (id: string, check: boolean) => void;
}

export function CartItem({ book, selected, toggleCheck }: Props) {
  return (
    <div className="flex" key={book.id}>
      {selected && toggleCheck && (
        <Checkbox
          checked={selected.includes(book.id!)}
          onCheckedChange={(value) => toggleCheck(book.id!, value === true)}
        />
      )}

      <div className="flex gap-3 md:gap-4">
        <img
          src={book.coverImage}
          alt={book.title}
          className="object-cover"
          style={{
            width: "clamp(4.38rem, 7.67vw, 5.75rem)",
            height: "clamp(6.63rem, 11.50vw, 8.63rem)",
          }}
        />

        <div className="flex flex-col justify-center gap-1">
          <div className="px-2 rounded-sm text-sm-bold border border-neutral-300 w-fit">
            {book.Category?.name}
          </div>

          <span className="text-md-bold md:text-lg-bold">{book.title}</span>

          <p className="text-sm-medium md:text-md-medium">
            {book.Author?.name}
          </p>
        </div>
      </div>
    </div>
  );
}

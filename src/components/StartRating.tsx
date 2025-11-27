import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  onChange: (v: number) => void;
}

export function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <RadioGroup
      value={String(value)}
      onValueChange={(v) => onChange(Number(v))}
      className="flex items-center gap-2"
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= value;

        return (
          <div key={n}>
            <RadioGroupItem
              value={String(n)}
              id={`star-${n}`}
              className="hidden"
            />
            <label htmlFor={`star-${n}`} className="cursor-pointer">
              <Star
                size={30}
                className={cn(
                  "size-10",
                  active
                    ? "fill-yellow-400 stroke-yellow-400"
                    : "fill-neutral-300 stroke-neutral-300"
                )}
              />
            </label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

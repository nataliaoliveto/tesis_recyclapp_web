"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const StarRating = () => {
  const [value, setValue] = useState(0);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const stars = Array(5).fill(0);

  return (
    <div className="flex gap-1">
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            className={cn(
              "h-6 w-6 cursor-pointer transition-colors",
              (hoverValue || value) >= starValue
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-gray-300"
            )}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(null)}
            onClick={() => setValue(starValue)}
          />
        );
      })}
    </div>
  );
};

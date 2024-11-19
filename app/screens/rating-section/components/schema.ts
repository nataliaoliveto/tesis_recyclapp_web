import { z } from "zod";

export const ratingFormSchema = z.object({
  name: z.string(),
  comment: z.string(),
  rating: z.coerce.number(),
});

export type RatingForm = z.infer<typeof ratingFormSchema>;

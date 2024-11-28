import { fetchCustom } from "./fetch-wrapper";

type BaseRating = {
  id: string;
  userId: string;
  text: string;
  value: number;
  userName: string;
};

export type CreateRating = Omit<BaseRating, "id">;
export type UpdateRating = Partial<BaseRating>;
export type DeleteRating = BaseRating & {
  isArchived: boolean;
};

export type RatingsResponse = {
  id: string;
  userId: string;
  text: string;
  value: number;
  userName: string;
};

export const ratingsApi = {
  getRatings: async (): Promise<RatingsResponse[]> => {
    const result = await fetchCustom.get("/ratings");
    return result;
  },
  createRating: async ({ userId, text, value, userName }: CreateRating) => {
    const body = {
      userId,
      text,
      value,
      userName,
    };
    const result = await fetchCustom.post("/rating", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result;
  },
};

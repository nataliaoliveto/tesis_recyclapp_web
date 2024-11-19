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
  getRatingById: async (id: string) => {
    const result = await fetchCustom.get(`/rating/${id}`);
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
  updateRating: async ({ id, userId, text, value, userName }: UpdateRating) => {
    const body = {
      userId,
      text,
      value,
      userName,
    };
    const result = await fetchCustom.put(`/rating/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  },
  deleteRating: async (id: string): Promise<DeleteRating> => {
    const result = await fetchCustom.delete(`/rating/${id}`);
    return result;
  },
};

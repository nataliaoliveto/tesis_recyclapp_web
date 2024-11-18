import { fetchCustom } from "./fetch-wrapper";

type BaseRating = {
  userId: string;
  text: string;
  value: number;
};

export type CreateRating = BaseRating;
export type UpdateRating = BaseRating & {
  id: string;
};
export type DeleteRating = UpdateRating & {
  isArchived: boolean;
};

export const ratingsApi = {
  getRatings: async (): Promise<
    {
      id: string;
      userId: string;
      text: string;
      value: number;
    }[]
  > => {
    const result = await fetchCustom.get("/ratings");
    return result;
  },
  getRatingById: async (id: string) => {
    const result = await fetchCustom.get(`/rating/${id}`);
    return result;
  },
  createRating: async ({ userId, text, value }: CreateRating) => {
    const body = {
      userId,
      text,
      value,
    };
    const result = await fetchCustom.post("/rating", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result;
  },
  updateRating: async ({ id, userId, text, value }: UpdateRating) => {
    const body = {
      userId,
      text,
      value,
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

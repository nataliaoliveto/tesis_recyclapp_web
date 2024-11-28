import { z } from "zod";
import { axiosCustom } from "./axios";

export interface CreateUserStore {
  userId: string;
  subscriptionId: string;
  expiryDate: Date;
  hasBenefits: boolean;
}

export const UserStoreSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expiryDate: z.coerce.date(),
  hasBenefits: z.boolean(),
  subscriptionId: z.string(),
  paymentCompleted: z.boolean(),
});

export type UserStore = z.infer<typeof UserStoreSchema>;

export const userStoreApi = {
  getUserStore: async (userId: string): Promise<UserStore> => {
    const result = await axiosCustom.get(`/userStoreClerk/${userId}`);
    return result.data;
  },
  createUserStore: async (body: CreateUserStore) => {
    const result = await axiosCustom.post(`/userStore`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

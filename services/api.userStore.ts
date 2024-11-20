import { axiosCustom } from "./axios";

export interface CreateUserStore {
  userId: string;
  subscriptionId: string;
  expiryDate: Date;
  hasBenefits: boolean;
}

export const userStoreApi = {
  createUserStore: async (body: CreateUserStore) => {
    const result = await axiosCustom.post(`/userStore`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

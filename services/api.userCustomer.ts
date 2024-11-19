import { axiosCustom } from "./axios";

export interface CreateUserCustomer {
  clerkUserId: string;
}

export const userCustomerApi = {
  createUserCustomer: async ({ clerkUserId }: CreateUserCustomer) => {
    const body = {
      userId: clerkUserId,
    };
    const result = await axiosCustom.post("/userCustomer", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

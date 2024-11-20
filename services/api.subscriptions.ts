import { fetchCustom } from "./fetch-wrapper";

type Subscription = {
  id: string;
  name:
    | "ADdiaria"
    | "ADsemanal"
    | "ADmensual"
    | "USBONmensual"
    | "USBOFFmensual";
  amount: number;
  duration: number;
  isArchived: boolean;
};

type CreateSubscription = {
  name: string;
  amount: number;
  duration: number;
};

export type UpdateSubscription = Partial<CreateSubscription> & {
  id: string;
};

export const subscriptionsApi = {
  getSubscriptions: async (): Promise<Subscription[]> => {
    const result = await fetchCustom.get("/subscriptions");
    return result;
  },
  getSubscriptionById: async (id: string): Promise<Subscription> => {
    const result = await fetchCustom.get(`/subscription/${id}`);
    return result;
  },
  createSubscription: async ({
    name,
    amount,
    duration,
  }: CreateSubscription): Promise<Subscription> => {
    const body = {
      name,
      amount,
      duration,
    };
    const result = await fetchCustom.post("/subscription", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result;
  },
  updateSubscription: async ({
    id,
    name,
    amount,
    duration,
  }: UpdateSubscription): Promise<Subscription> => {
    const body = {
      name,
      amount,
      duration,
    };
    const result = await fetchCustom.put(`/subscription/${id}`, body);
    return result;
  },
};

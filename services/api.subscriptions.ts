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

export const subscriptionsApi = {
  getSubscriptions: async (): Promise<Subscription[]> => {
    const result = await fetchCustom.get("/subscriptions");
    return result;
  },
};

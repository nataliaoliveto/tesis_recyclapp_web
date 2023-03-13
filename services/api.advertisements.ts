import axios, {AxiosResponse} from "axios";
import { axiosCustom } from "./axios";

export interface CreateAdvertisement {
  userId: string;
  title: string;
  text: string;
  duration: string;
}

type CreateAdvertisementResponse = { advertisementId: string }

export const advertisementsApi = {
  createAdvertisement: async ({
    userId,
    title,
    text,
    duration,
  }: CreateAdvertisement) => {
    const body = {
        userId,
        title,
        text,
        duration,
    };
    const result = await axiosCustom.post("/api/advertisement", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

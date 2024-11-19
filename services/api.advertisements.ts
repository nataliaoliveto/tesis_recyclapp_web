import { axiosCustom } from "./axios";

export interface CreateAdvertisement {
  userId: string;
  title: string;
  text: string;
  durationStart: string | null;
  durationEnd: string | null;
  duration: string;
}

export const advertisementsApi = {
  createAdvertisement: async ({
    userId,
    title,
    text,
    durationStart,
    durationEnd,
    duration,
  }: CreateAdvertisement) => {
    const body = {
      userId,
      title,
      text,
      durationStart,
      durationEnd,
      duration,
    };
    const result = await axiosCustom.post("/advertisement", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

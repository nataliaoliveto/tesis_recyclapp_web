import { axiosCustom } from "./axios";

export interface CreateAdvertisement {
  userId: string;
  title: string;
  text: string;
  durationStart: string | null;
  durationEnd: string | null;
  duration: string;
  displayName: string;
}

export const advertisementsApi = {
  createAdvertisement: async ({
    userId,
    title,
    text,
    durationStart,
    durationEnd,
    duration,
    displayName,
  }: CreateAdvertisement): Promise<{ advertisementId: string }> => {
    const body = {
      userId,
      title,
      text,
      durationStart,
      durationEnd,
      duration,
      displayName,
    };
    const result = await axiosCustom.post("/advertisement", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};

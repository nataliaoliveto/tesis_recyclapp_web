import { fetchCustom } from "./fetch-wrapper";

interface UploadImage {
  image: File;
  publicid: string;
  subfolder: string;
}

export const imagesApi = {
  uploadImage: async ({ image, publicid, subfolder }: UploadImage) => {
    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("publicid", publicid);
    formData.append("subfolder", subfolder);
    const result = await fetchCustom.put("/api/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return result;
  },
};

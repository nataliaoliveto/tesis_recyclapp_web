import { axiosCustom } from "./axios";

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
    const result = await axiosCustom.put(
      "/api/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(formData)  
    return result.data;
  },
};
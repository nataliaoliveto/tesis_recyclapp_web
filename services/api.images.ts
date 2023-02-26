import axios from "axios";

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
    const result = await axios.put(
      "http://localhost:5000/api/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return result.data;
  },
};

//TODO: Add services for api.user.ts and whatever is required.

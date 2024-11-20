import axios from "axios";

export const CLOUDINARY_CONFIG = {
  CLOUDINARY_NAME: "dakunjike",
  UPLOAD_PRESET: "UPRecyclapp",
  API_URL_UPLOAD: "https://api.cloudinary.com/v1_1/dakunjike/image/upload",
};

export const IMAGE_INFO = {
  CLOUDINARY_URL: `https://res.cloudinary.com/${CLOUDINARY_CONFIG.CLOUDINARY_NAME}/image/upload/RecyclApp/`,
  ADVERTISEMENT_FOLDER: "RecyclApp/Advertisement",
};

interface CloudinaryUploadOptions {
  publicId: string;
  folder: string;
  file: File;
}

export const useCloudinary = () => {
  const uploadImage = async ({
    publicId,
    folder,
    file,
  }: CloudinaryUploadOptions) => {
    try {
      const formData = new FormData();
      formData.append("upload_preset", CLOUDINARY_CONFIG.UPLOAD_PRESET);
      formData.append("public_id", publicId);
      formData.append("folder", folder);
      formData.append("file", file);

      const response = await axios.post(
        CLOUDINARY_CONFIG.API_URL_UPLOAD,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Failed to upload image to Cloudinary");
    }
  };

  return { uploadImage };
};

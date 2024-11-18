import { useState } from 'react';

interface UseImageUploadReturn {
  image: File | null;
  imageBase64: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  convertImageToBase64: () => Promise<string | null>;
  clearImage: () => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [image, setImage] = useState<File | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageBase64(null); // Reset base64 when new image is selected
    }
  };

  const convertImageToBase64 = async (): Promise<string | null> => {
    if (!image) return null;

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String);
        resolve(base64String);
      };
      reader.readAsDataURL(image);
    });
  };

  const clearImage = () => {
    setImage(null);
    setImageBase64(null);
  };

  return {
    image,
    imageBase64,
    handleImageChange,
    convertImageToBase64,
    clearImage,
  };
}; 
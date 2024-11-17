"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { imagesApi } from "../services/api.images";

interface UseUploadImageProps {
  subfolder: string;
}

export const useUploadImage = ({ subfolder }: UseUploadImageProps) => {
  const [image, setImage] = useState<File | null>(null);

  const { mutate, isPending } = useMutation({
    mutationKey: ["imagesApi"],
    mutationFn: (publicid: string) =>
      imagesApi.uploadImage({
        image: image ?? new File([""], ""),
        publicid,
        subfolder,
      }),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  return { image, handleImageChange, uploadImage: mutate, isPending };
};

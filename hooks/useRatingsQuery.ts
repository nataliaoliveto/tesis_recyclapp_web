import {
  CreateRating,
  ratingsApi,
  RatingsResponse,
} from "@/services/api.ratings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRatingsQuery = () => {
  return useQuery({
    queryKey: ["ratings"],
    queryFn: () => ratingsApi.getRatings(),
  });
};

export const useCreateRatingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-rating"],
    mutationFn: (rating: CreateRating) => ratingsApi.createRating(rating),
    onSuccess: (rating: CreateRating) => {
      queryClient.setQueryData(["ratings"], (old: RatingsResponse[]) => {
        return [...old, rating];
      });
      toast.success("¡Gracias por tu comentario!");
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "Hubo un error al enviar tu comentario. Por favor, intenta nuevamente."
      );
    },
  });
};

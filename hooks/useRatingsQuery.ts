import { CreateRating, DeleteRating, ratingsApi, UpdateRating } from "@/services/api.ratings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRatingsQuery = () => {
  return useQuery({
    queryKey: ["ratings"],
    queryFn: () => ratingsApi.getRatings(),
  });
};

export const useRatingByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["rating", id],
    queryFn: () => ratingsApi.getRatingById(id),
  });
};

export const useCreateRatingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-rating"],
    mutationFn: (rating: CreateRating) => ratingsApi.createRating(rating),
    onSuccess: (rating: CreateRating) => {
      queryClient.setQueryData(["ratings"], (old: any) => {
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

export const useUpdateRatingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["ratings", "update-rating"],
    mutationFn: (rating: UpdateRating) => ratingsApi.updateRating(rating),
    onSuccess: (rating: UpdateRating) => {
      queryClient.setQueryData(["ratings"], (old: any) => {
        return old.map((r: any) => (r.id === rating.id ? rating : r));
      });
      toast.success("Comentario actualizado correctamente");
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "Hubo un error al actualizar tu comentario. Por favor, intenta nuevamente."
      );
    },
  });
};

export const useDeleteRatingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["ratings", "delete-rating"],
    mutationFn: (id: string) => ratingsApi.deleteRating(id),
    onSuccess: (rating: DeleteRating) => {
      queryClient.setQueryData(["ratings"], (old: any) => {
        return old.filter((r: any) => r.id !== rating.id);
      });
      toast.success("Comentario eliminado correctamente");
    },
    onError: () => {
      toast.error(
        "Hubo un error al eliminar tu comentario. Por favor, intenta nuevamente."
      );
    },
  });
};

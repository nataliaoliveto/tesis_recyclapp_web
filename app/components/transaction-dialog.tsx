"use client";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useUploadImage } from "@/hooks/useUploadImage";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  advertisementsApi,
  CreateAdvertisement,
} from "@/services/api.advertisements";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Textarea } from "@/components/ui/textarea";

const advertisementSchema = z.object({
  title: z
    .string()
    .min(4, {
      message: "El mínimo del título son 3 caracteres y el máximo 30",
    })
    .max(30, {
      message: "El máximo del título son 30 caracteres",
    })
    .regex(new RegExp(/^[a-zA-Z0-9]{4,30}$/), {
      message: "El título puede incluir sólo letras y números",
    }),
  text: z
    .string()
    .min(25, {
      message: "El mínimo del texto son 25 caracteres y el máximo 255",
    })
    .max(255, {
      message: "El máximo del texto son 255 caracteres",
    }),
  price: z.string(),
  duration: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
});

type ValidationSchema = z.infer<typeof advertisementSchema>;

interface TransactionDialogProps {
  duration: string;
  price: string;
  children: ReactNode;
}

export const TransactionDialog = ({
  duration,
  price,
  children,
}: TransactionDialogProps) => {
  const { uploadImage, handleImageChange } = useUploadImage({
    subfolder: "Advertisement",
  });

  const durationDays = () => {
    if (duration === "Diaria") return 1;
    if (duration === "Semanal") return 7;
    if (duration === "Mensual") return 28;
    return 0;
  };

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(advertisementSchema),
    mode: "onSubmit",
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["advertisementsApi"],
    mutationFn: async (data: CreateAdvertisement) => {
      return await advertisementsApi
        .createAdvertisement(data)
        .then((res) => res);
    },
  });

  const onSubmit = async (values: ValidationSchema) => {
    try {
      const res = await mutateAsync({
        userId: "cleeteqqv0000up5soh9k24cs",
        title: values.title,
        text: values.text,
        duration,
      });

      await uploadImage(res.advertisementId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Solicitud de Publicidad {duration}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor $</FormLabel>
                  <FormControl>
                    <Input {...field} disabled value={price} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duración en días</FormLabel>
                  <FormControl>
                    <Input {...field} disabled value={durationDays()} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de contacto</FormLabel>
                  <FormControl>
                    <Input {...field} disabled placeholder="Nombre de contacto" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mail de contacto</FormLabel>
                  <FormControl>
                    <Input {...field} disabled placeholder="Mail" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título a mostrar en la publicidad</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Título de publicidad" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Texto a mostrar en la publicidad</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Texto de publicidad"
                      className="resize-none"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Imagen a mostrar en la publicidad</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".jpg, .png, .gif, .jpeg"
                  onChange={handleImageChange}
                />
              </FormControl>
            </FormItem>

            <DialogFooter className="gap-2">
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="w-full bg-teal-500 hover:bg-green-400 text-white"
              >
                Enviar solicitud
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-teal-200"
                >
                  Cancelar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

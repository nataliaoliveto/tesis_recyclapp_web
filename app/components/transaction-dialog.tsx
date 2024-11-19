"use client";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
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
import { useImageUpload } from "@/hooks/useImageUpload";
import { useMutation } from "@tanstack/react-query";
import { advertisementsApi } from "@/services/api.advertisements";

const advertisementSchema = z.object({
  title: z
    .string()
    .min(4, {
      message: "El mínimo del título son 3 caracteres y el máximo 30",
    })
    .max(30, {
      message: "El máximo del título son 30 caracteres",
    })
    .regex(new RegExp(/^[a-zA-Z0-9\s]{4,30}$/), {
      message: "El título puede incluir sólo letras, números y espacios",
    }),
  text: z
    .string()
    .min(25, {
      message: "El mínimo del texto son 25 caracteres y el máximo 255",
    })
    .max(255, {
      message: "El máximo del texto son 255 caracteres",
    }),
  price: z.string().min(1, {
    message: "El precio es requerido",
  }),
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

const durationDays = (duration: string) => {
  if (duration === "Diaria") return 1;
  if (duration === "Semanal") return 7;
  if (duration === "Mensual") return 28;
  return 0;
};

const durationType = (duration: string) => {
  if (duration === "Diaria") return "diaria";
  if (duration === "Semanal") return "semanal";
  if (duration === "Mensual") return "mensual";
  return "";
};

export const TransactionDialog = ({
  duration,
  price,
  children,
}: TransactionDialogProps) => {
  const { handleImageChange } = useImageUpload();

  const { mutateAsync: createAdvertisement } = useMutation({
    mutationKey: ["createAdvertisement"],
    mutationFn: advertisementsApi.createAdvertisement,
  });

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(advertisementSchema),
    mode: "onSubmit",
    defaultValues: {
      price: price,
      duration: durationDays(duration).toString(),
    },
  });

  const onSubmit = async (values: ValidationSchema) => {
    try {
      const advertisement = await createAdvertisement({
        userId: "1923801jkashd890123hjkasd892",
        title: values.title,
        text: values.text,
        durationStart: null,
        durationEnd: null,
        duration: durationType(duration),
      });

      if (advertisement.error) {
        throw new Error(advertisement.error);
      }

      const emailData = {
        title: values.title,
        text: values.text,
        price,
        duration,
        durationDays: durationDays(duration),
        contactName: values.contactName,
        contactEmail: values.contactEmail,
      };

      const response = await fetch("/api/send/advertisement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
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
                    <Input {...field} readOnly value={price} />
                  </FormControl>
                  <FormMessage />
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
                    <Input
                      {...field}
                      readOnly
                      value={durationDays(duration).toString()}
                    />
                  </FormControl>
                  <FormMessage />
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
                    <Input {...field} placeholder="Nombre de contacto" />
                  </FormControl>
                  <FormMessage />
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
                    <Input {...field} placeholder="Mail" />
                  </FormControl>
                  <FormMessage />
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
              <FormMessage />
            </FormItem>

            <DialogFooter className="gap-2">
              <Button
                type="submit"
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

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
import { ReactNode, useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useImageUpload } from "@/hooks/useImageUpload";
import { useMutation } from "@tanstack/react-query";
import { advertisementsApi } from "@/services/api.advertisements";
import { toast } from "sonner";
import { useCloudinary, IMAGE_INFO } from "@/hooks/useCloudinary";
import { useUser } from "@clerk/nextjs";

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
  userId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
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
  userId,
  children,
  open,
  setOpen,
}: TransactionDialogProps) => {
  const { user } = useUser();
  const [isSending, setIsSending] = useState(false);
  const { image, handleImageChange, convertImageToBase64 } = useImageUpload();
  const { uploadImage } = useCloudinary();
  const { mutateAsync: createAdvertisement } = useMutation({
    mutationKey: ["createAdvertisement"],
    mutationFn: advertisementsApi.createAdvertisement,
    onError: () => toast.error("Error al crear la publicidad"),
    onSuccess: () => {
      toast.success("Publicidad creada correctamente");
      form.reset();
    },
  });

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(advertisementSchema),
    mode: "onSubmit",
    defaultValues: {
      price: price,
      duration: durationDays(duration).toString(),
      title: "",
      text: "",
      contactName: user?.username ?? "",
      contactEmail: user?.emailAddresses[0].emailAddress ?? "",
    },
  });

  useEffect(() => {
    if (user) {
      // necesario para setear el valor luego de cargar el usuario
      form.setValue("contactName", user.username ?? "");
      form.setValue("contactEmail", user.emailAddresses[0].emailAddress ?? "");
    }
  }, [user, form]);

  const onSubmit = async (values: ValidationSchema) => {
    setIsSending(true);
    try {
      const imageBase64 = await convertImageToBase64();
      if (!imageBase64) throw new Error("Error al convertir la imagen");
      if (!image) throw new Error("Error al subir la imagen");

      const resAdvertisement = await createAdvertisement({
        userId,
        title: values.title,
        text: values.text,
        durationStart: null,
        durationEnd: null,
        duration: durationType(duration),
        displayName: user?.username ?? "",
      });

      const advertisementId = resAdvertisement.advertisementId;

      const resImage = await uploadImage({
        publicId: advertisementId,
        folder: `${IMAGE_INFO.ADVERTISEMENT_FOLDER}/${userId}`,
        file: image,
      });

      const emailData = {
        title: values.title,
        text: values.text,
        price,
        duration,
        durationDays: durationDays(duration),
        contactName: values.contactName,
        contactEmail: values.contactEmail,
        imageInfo: resImage.url,
      };

      const response = await fetch("/api/advertisement", {
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
      setOpen(false);
    } catch (error) {
      toast.error("Error al subir la imagen o crear la publicidad");
      throw error;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Solicitud de Publicidad {duration}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Valor
                    </FormLabel>
                    <FormControl>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 font-medium">
                        {price}
                        <Input type="hidden" {...field} value={price} />
                      </div>
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
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Duración en días
                    </FormLabel>
                    <FormControl>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 font-medium">
                        {durationDays(duration)}
                        <Input
                          type="hidden"
                          {...field}
                          value={durationDays(duration).toString()}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Usuario
                    </FormLabel>
                    <FormControl>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 font-medium">
                        {user?.username}
                        <Input
                          {...field}
                          type="hidden"
                          value={user?.username ?? ""}
                        />
                      </div>
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
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Mail de contacto
                    </FormLabel>
                    <FormControl>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 font-medium">
                        {user?.emailAddresses[0].emailAddress}
                        <Input
                          {...field}
                          type="hidden"
                          value={user?.emailAddresses[0].emailAddress ?? ""}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Título a mostrar en la publicidad
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Título de publicidad"
                      className="border-gray-200 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Texto a mostrar en la publicidad
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Texto de publicidad"
                      className="resize-none border-gray-200 focus:ring-teal-500 focus:border-teal-500"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Imagen a mostrar en la publicidad
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".jpg, .png, .gif, .jpeg"
                  onChange={handleImageChange}
                  className="border-gray-200 focus:ring-teal-500 focus:border-teal-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>

            <DialogFooter className="gap-3 pt-4">
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5"
                disabled={isSending}
              >
                {isSending ? "Creando..." : "Enviar solicitud"}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 font-medium py-2.5"
                  onClick={() => form.reset()}
                  disabled={isSending}
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

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
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { userStoreApi } from "@/services/api.userStore";

const storeSubscriptionSchema = z.object({
  price: z.string().min(1, {
    message: "El precio es requerido",
  }),
  duration: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  userId: z.string(),
  subscriptionId: z.string(),
  hasBenefits: z.coerce.boolean(),
});

type ValidationSchema = z.infer<typeof storeSubscriptionSchema>;

interface TransactionDialogProps {
  price: string;
  userId: string;
  duration: string;
  subscriptionId: string;
  subscriptionName: string;
  children: ReactNode;
}

const hasBenefits = (subscriptionName: string) => {
  if (!subscriptionName) return false;
  const benefits = {
    USBONmensual: true,
    USBOFFmensual: false,
  }[subscriptionName];

  return benefits;
};

export const StorePlanDialog = ({
  price,
  userId,
  duration,
  subscriptionId,
  subscriptionName,
  children,
}: TransactionDialogProps) => {
  const { mutateAsync: createUserStore, isPending: isCreatingUserStore } =
    useMutation({
      mutationKey: ["createStoreSubscription"],
      mutationFn: userStoreApi.createUserStore,
      onError: () => toast.error("Error al crear la suscripción"),
    });

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(storeSubscriptionSchema),
    mode: "onSubmit",
    defaultValues: {
      price,
      duration,
      contactName: "",
      contactEmail: "",
      userId,
      subscriptionId,
      hasBenefits: hasBenefits(subscriptionName),
    },
  });

  const onSubmit = async (values: ValidationSchema) => {
    const body = {
      expiryDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      userId: values.userId,
      subscriptionId: values.subscriptionId,
      hasBenefits: values.hasBenefits,
    };

    try {
      const userStore = await createUserStore(body);
      if (!userStore) throw new Error("User store not created");

      const emailData = {
        price,
        contactName: values.contactName,
        contactEmail: values.contactEmail,
        subscriptionName:
          subscriptionName === "USBONmensual"
            ? "Con beneficios"
            : "Sin beneficios",
        expireDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      };

      const response = await fetch("/api/store-subscription", {
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
      toast.error("Error al subir la imagen o crear la publicidad");
      throw error;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Suscripción {duration} para Tienda</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input type="hidden" {...form.register("userId")} value={userId} />
            <input
              type="hidden"
              {...form.register("subscriptionId")}
              value={subscriptionId}
            />
            <input
              type="hidden"
              {...form.register("hasBenefits")}
              value={hasBenefits(subscriptionName) ? "true" : "false"}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <div className="p-2 border rounded-md">
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
                  <FormLabel>Duración en días</FormLabel>
                  <FormControl>
                    <div className="p-2 border rounded-md">
                      {duration}
                      <Input type="hidden" {...field} value={duration} />
                    </div>
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
                    <Input
                      {...field}
                      autoFocus
                      placeholder="Nombre de contacto"
                    />
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

            <DialogFooter className="gap-2">
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-green-400 text-white"
                disabled={isCreatingUserStore}
              >
                {isCreatingUserStore ? "Enviando..." : "Enviar solicitud"}
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

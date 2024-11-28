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
import { ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { userStoreApi } from "@/services/api.userStore";
import { useUser } from "@clerk/nextjs";

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
  open: boolean;
  setOpen: (open: boolean) => void;
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
  open,
  setOpen,
}: TransactionDialogProps) => {
  const { user } = useUser();
  const [isSending, setIsSending] = useState(false);
  const { mutateAsync: createUserStore } = useMutation({
    mutationKey: ["createStoreSubscription"],
    mutationFn: userStoreApi.createUserStore,
    onError: () => toast.error("Error al crear la suscripción"),
    onSuccess: () => {
      toast.success("Plan solicitado correctamente");
      form.reset();
    },
  });

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(storeSubscriptionSchema),
    mode: "onSubmit",
    defaultValues: {
      price,
      duration,
      contactName: user?.username ?? "",
      contactEmail: user?.emailAddresses[0].emailAddress ?? "",
      userId,
      subscriptionId,
      hasBenefits: hasBenefits(subscriptionName),
    },
  });

  const onSubmit = async (values: ValidationSchema) => {
    setIsSending(true);
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
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error al subir la imagen o crear la publicidad");
      throw error;
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (user) {
      form.setValue("contactName", user.username ?? "");
      form.setValue("contactEmail", user.emailAddresses[0].emailAddress ?? "");
    }
  }, [user, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                  <FormLabel>Usuario</FormLabel>
                  <FormControl>
                    <div className="p-2 border rounded-md">
                      {user?.username}
                      <Input
                        {...field}
                        value={user?.username ?? ""}
                        type="hidden"
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
                  <FormLabel>Mail de contacto</FormLabel>
                  <FormControl>
                    <div className="p-2 border rounded-md">
                      {user?.emailAddresses[0].emailAddress}
                      <Input
                        {...field}
                        value={user?.emailAddresses[0].emailAddress ?? ""}
                        type="hidden"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="gap-2">
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-green-400 text-white"
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar solicitud"}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-teal-200"
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

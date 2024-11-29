"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const emailSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
});

const resetSchema = z
  .object({
    code: z.string().length(6, "El código debe tener 6 dígitos"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(100, "La contraseña es demasiado larga"),
    confirmPassword: z.string().min(1, "Confirmar contraseña"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

type EmailSchema = z.infer<typeof emailSchema>;
type ResetSchema = z.infer<typeof resetSchema>;

export const ResetPasswordForm = () => {
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useSignIn();

  const emailForm = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const resetForm = useForm<ResetSchema>({
    resolver: zodResolver(resetSchema),
    mode: "onChange",
    defaultValues: {
      code: "",
      password: "",
    },
  });

  async function onEmailSubmit(data: EmailSchema) {
    if (!signIn) return;

    try {
      setIsLoading(true);
      setError("");
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: data.email,
      });
      setSuccessfulCreation(true);
      toast.success("Código enviado a tu correo electrónico");
    } catch (err) {
      console.error("Error:", err);
      if (isClerkAPIResponseError(err)) {
        setError(
          err.errors[0].longMessage ??
            "Error al enviar el código de verificación"
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function onResetSubmit(data: ResetSchema) {
    if (!signIn) return;

    try {
      setIsLoading(true);
      setError("");
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: data.code,
        password: data.password,
      });

      if (result.status === "complete") {
        toast.success("Contraseña actualizada exitosamente");
        window.location.href = "/sign-in";
      }
    } catch (err) {
      console.error("Error:", err);
      if (isClerkAPIResponseError(err)) {
        setError(
          err.errors[0].longMessage ?? "Error al restablecer la contraseña"
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Restablecer Contraseña
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {successfulCreation
              ? "Ingresa el código enviado a tu correo"
              : "Ingresa tu correo electrónico para recibir el código de verificación"}
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        {!successfulCreation ? (
          <Form {...emailForm}>
            <form
              onSubmit={emailForm.handleSubmit(onEmailSubmit)}
              className="space-y-4"
            >
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    placeholder="tu@email.com"
                    {...emailForm.register("email")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar Código"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50"
                  asChild
                >
                  <Link href="/sign-in">Volver</Link>
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <Form {...resetForm}>
            <form
              onSubmit={resetForm.handleSubmit(onResetSubmit)}
              className="space-y-6"
            >
              <FormField
                control={resetForm.control}
                name="code"
                render={({ field }) => {
                  return (
                    <FormItem className="space-y-4 flex flex-col items-center w-full justify-center">
                      <FormControl className="flex justify-center gap-2 w-full items-center">
                        <InputOTP
                          maxLength={6}
                          {...field}
                          className="flex justify-center gap-2"
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription className="text-center text-sm text-muted-foreground">
                        Por favor, ingrese el código de verificación enviado a
                        su correo electrónico.
                      </FormDescription>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={resetForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nueva Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Nueva contraseña"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-500" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={resetForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirmar contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Actualizando..." : "Actualizar Contraseña"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setSuccessfulCreation(false);
                    resetForm.reset();
                  }}
                >
                  Volver
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

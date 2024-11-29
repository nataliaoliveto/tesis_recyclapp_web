"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { VerifyEmail } from "@/app/components/verify-email";
import { RegisterForm, registerSchema } from "./schema";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

export default function SignUpForm() {
  const { isLoaded, signUp } = useSignUp();
  const [loading, setLoading] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterForm) {
    if (!isLoaded) return;

    try {
      setLoading(true);

      await signUp.create({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.email,
        password: data.password,
        username: data.username,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifyEmail(true);

      toast.info("Por favor verifica tu correo electrónico para continuar.", {
        richColors: true,
      });
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        toast.error(
          error.errors[0].longMessage ?? "Ocurrió un error durante el registro"
        );
      } else {
        toast("Ocurrió un error durante el registro");
      }
    } finally {
      setLoading(false);
    }
  }

  if (verifyEmail) return <VerifyEmail />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Crear cuenta
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete sus datos para registrarse
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input placeholder="juanperez" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="juan.perez@ejemplo.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Te enviaremos un código de verificación a este correo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>Mínimo 8 caracteres</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                {loading ? "Creando cuenta..." : "Crear cuenta"}
              </Button>

              <Button
                asChild
                type="button"
                variant="ghost"
                className="w-full border-gray-300 hover:bg-gray-50"
              >
                <Link href="/sign-in">Ingresar</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

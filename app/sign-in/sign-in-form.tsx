"use client";

import { useSignIn } from "@clerk/nextjs";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, ValidationSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

export const SignInForm = () => {
  const { signIn } = useSignIn();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  async function onSubmit(data: ValidationSchema) {
    if (!signIn) return;

    try {
      setIsLoading(true);
      const result = await signIn.create({
        identifier: data.username,
        password: data.password,
      });
      console.log("123");

      if (result.status === "complete") {
        toast.success("¡Inicio de sesión exitoso!");
        window.location.href = "/";
      } else {
        setError("Error al iniciar sesión. Por favor, intente nuevamente.");
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        setError(
          err.errors[0].longMessage ??
            "Error al iniciar sesión. Por favor, intente nuevamente."
        );
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
          <p className="mt-2 text-sm text-gray-600">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <FormItem>
                <FormLabel className="text-gray-700">Usuario o Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Usuario"
                    {...form.register("username")}
                    className="w-full"
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel className="text-gray-700">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    {...form.register("password")}
                    className="w-full"
                  />
                </FormControl>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-green-600 hover:text-green-700"
                >
                  <Link href="/reset-password">¿Olvidaste tu contraseña?</Link>
                </Button>
              </FormItem>
            </div>

            <div className="flex items-center gap-2 py-2 justify-center text-sm">
              <span className="text-gray-600">¿Primera vez ingresando?</span>
              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-green-600 hover:text-green-700"
              >
                <Link href="/sign-up">Crear nuevo usuario</Link>
              </Button>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Ingresando..." : "Ingresar"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link href="/">Volver</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section
      className="w-full py-12 flex flex-col justify-center items-center"
      id="id-contact"
    >
      <div className="flex justify-center py-4">
        <Image
          src="/icons/headset.png"
          width={128}
          height={128}
          alt="headset atención al usuario"
          className="mt-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-8 mb-10">
        <h2 className="text-center text-4xl font-semibold text-green-800">
          Contacto
        </h2>
        <div className="w-[400px] h-2 bg-cyan-100" />
      </div>
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-green-800">
              ¿Necesitas mayor asistencia?
            </CardTitle>
            <p className="text-lg text-green-700 mt-2">
              Dejanos tu consulta y nos pondremos en contacto
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre"
                          {...field}
                        />
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
                      <FormLabel>
                        Correo electrónico
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Como podemos ayudarte
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escribe tu mensaje aquí"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="flex justify-center px-0">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-base font-medium bg-green-600 hover:bg-green-700 text-white"
                  >
                    Enviar Mensaje
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

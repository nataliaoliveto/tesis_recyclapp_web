"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormValues = {
  name: string;
  comment: string;
  rating: number;
};

export const LeaveAComment = () => {
  const [hover, setHover] = useState(0);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      comment: "",
      rating: 0,
    },
  });

  const rating = form.watch("rating");

  const onSubmit = (data: FormValues) => {
    console.log('Submitted:', data);
    form.reset();
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-green-800 sm:text-4xl">
            ¡Nos interesa tu opinión!
          </h2>
          <p className="mt-4 text-lg text-green-700">
            Deja tu comentario sobre el producto y ayúdanos a mejorar
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "El nombre es requerido" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                rules={{ required: "La calificación es requerida" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calificación</FormLabel>
                    <FormControl>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, index) => {
                          const ratingValue = index + 1;
                          return (
                            <label key={index} className="cursor-pointer">
                              <input
                                type="radio"
                                className="hidden"
                                {...field}
                              />
                              <FaStar
                                className="transition-all duration-200 ease-in-out"
                                color={ratingValue <= (hover || rating) ? "#fbbf24" : "#e5e7eb"}
                                size={32}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                                onClick={() => form.setValue("rating", ratingValue)}
                              />
                            </label>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comment"
                rules={{ required: "El comentario es requerido" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deja un comentario</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Escribe tu opinión aquí" 
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-base font-medium bg-green-600 hover:bg-green-700 text-white"
                >
                  Enviar comentario
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { registerSchema, type ValidationSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (values: ValidationSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value.length <= 30) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input
                  placeholder="Apellido"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value.length <= 30) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input placeholder="mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input
                  placeholder="teléfono"
                  type="number"
                  {...field}
                  onWheel={(e) => e.currentTarget.blur()}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    if (e.target.value.length <= 10) {
                      if (+e.target.value >= 0) {
                        field.onChange(e);
                      }
                    }
                  }}
                />
              </FormControl>
              <p className="text-sm text-muted-foreground">
                Ingresar los 10 números luego del + 54 9 ...
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre de usuario"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value.length <= 30) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
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
                <Input
                  placeholder="Contraseña"
                  type="password"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value.length <= 16) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordTwice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repetir contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder="Repetir contraseña"
                  type="password"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value.length <= 16) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de usuario</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo de usuario" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CUSTOMER">General</SelectItem>
                  <SelectItem value="TIENDA">Tienda</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter className="flex flex-col gap-2">
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            className="w-full bg-green-500 hover:bg-green-600"
            onClick={() => {}}
          >
            Crear
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            Volver
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}; 
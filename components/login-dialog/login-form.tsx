"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { loginSchema, type ValidationSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";


export const LoginForm = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  return (
    <>
      <Form {...form}>
        <form className="space-y-4">
          <div className="space-y-4">
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input placeholder="Usuario" {...form.register("name")} />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Contraseña" {...form.register("password")} />
              </FormControl>
            </FormItem>
          </div>

          <div className="flex items-center gap-2 py-2">
            <span>¿Primera vez ingresando?</span>
            <Button
              variant="link"
              onClick={() => {}}
              className="p-0 h-auto"
            >
              Crear nuevo usuario
            </Button>
          </div>
        </form>
      </Form>

      <DialogFooter className="flex gap-2">
        <Button className="w-full bg-green-500 hover:bg-green-600">Login</Button>
        <Button
          variant="outline"
          onClick={() => onOpenChange(false)}
          className="w-full"
        >
          Cancelar
        </Button>
      </DialogFooter>
    </>
  );
}; 
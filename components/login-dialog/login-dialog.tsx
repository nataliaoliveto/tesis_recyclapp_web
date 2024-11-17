"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";

export const LoginDialog = ({
  children,
  onOpenChange,
  isOpen,
}: {
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
}) => {
  const [registerUser] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>
            {registerUser ? "Crear usuario" : "Ingresar"}
          </DialogTitle>
        </DialogHeader>

        {registerUser ? (
          <RegisterForm onOpenChange={onOpenChange} />
        ) : (
          <LoginForm onOpenChange={onOpenChange} />
        )}
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const SignInDialog = ({
  open,
  onOpenChange,
  children,
}: SignInDialogProps) => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Iniciar sesión requerido</DialogTitle>
          <DialogDescription>
            Para acceder a este servicio, necesitas iniciar sesión primero.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button
            onClick={handleSignIn}
            className="bg-green-600 hover:bg-green-700"
          >
            Ir a iniciar sesión
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

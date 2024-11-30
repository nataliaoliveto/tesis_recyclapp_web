"use client";

import { useForm } from "react-hook-form";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import * as z from "zod";
import { useSignUp, useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userCustomerApi } from "@/services/api.userCustomer";

const schema = z.object({
  code: z
    .string()
    .min(6, "Código debe tener 6 dígitos")
    .max(6, "Código debe tener 6 dígitos"),
});

export const VerifyEmail = () => {
  const { signUp, isLoaded } = useSignUp();
  const { setActive } = useClerk();
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  const { mutateAsync: createUserCustomer } = useMutation({
    mutationKey: ["userCustomer"],
    mutationFn: userCustomerApi.createUserCustomer,
    onSuccess: () => {
      toast.success("Email verificado correctamente!");
      window.location.href = "/";
    },
    onError: () => {
      toast.error(
        "Ocurrió un error durante la verificación del correo electrónico."
      );
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    if (!isLoaded) return;

    setIsVerifying(true);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: values.code,
      });
      if (signUpAttempt.status !== "complete") {
        toast.error("Código inválido. Por favor, intenta nuevamente.");
        return;
      }
      if (!signUpAttempt.createdUserId) throw new Error("User not created");

      await setActive({ session: signUpAttempt.createdSessionId });
      await createUserCustomer({
        clerkUserId: signUpAttempt.createdUserId,
      });
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        setError(err.errors[0].longMessage ?? "Error al validar el código.");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded || resendDisabled) return;

    try {
      await signUp.prepareEmailAddressVerification();
      setResendDisabled(true);

      let timeLeft = 60;
      setCountdown(timeLeft);

      const timer = setInterval(() => {
        timeLeft -= 1;
        setCountdown(timeLeft);

        if (timeLeft === 0) {
          clearInterval(timer);
          setResendDisabled(false);
        }
      }, 1000);

      toast.success("Código reenviado. Por favor revisa tu correo.");
    } catch (err) {
      console.error("Error al reenviar el código:", err);
      toast.error("Error al reenviar el código. Por favor intenta nuevamente.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="mb-4 space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Verificación de correo
          </h1>
          <p className="text-sm text-muted-foreground">
            Te hemos enviado un código de verificación a tu correo electrónico
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 items-center"
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
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
                    Por favor, ingrese el código de verificación enviado a su
                    correo electrónico.
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 w-full">
              <Button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors"
              >
                {isVerifying ? "Verificando..." : "Verificar correo"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={handleResendCode}
                disabled={resendDisabled}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {resendDisabled
                  ? `Reenviar código (${countdown}s)`
                  : "¿No recibiste el código? Reenviar"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

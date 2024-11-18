import { useForm } from "react-hook-form";
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
import { useRouter } from "next/navigation";
import { useSignUp, useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { useState } from "react";

const schema = z.object({
  code: z
    .string()
    .min(6, "Code must be 6 characters")
    .max(6, "Code must be 6 characters"),
});

export const VerifyEmail = () => {
  const { signUp, isLoaded } = useSignUp();
  const { setActive } = useClerk();
  const router = useRouter();
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: values.code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        toast.success("Email verificado correctamente!");
        router.replace("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
        toast.error("Código inválido. Por favor, intenta nuevamente.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(
        "Ocurrió un error durante la verificación del correo electrónico."
      );
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
                className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors"
              >
                Verificar correo
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

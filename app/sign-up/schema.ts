import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "El nombre es requerido"),
    lastName: z.string().min(1, "El apellido es requerido"),
    email: z.string().email("Correo electrónico inválido"),
    phone: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, "Número de teléfono inválido"),
    userType: z.enum(["general", "tienda"]),
    password: z
      .string()
      .min(8, "La contraseña debe tener 8 caracteres")
      .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
      .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
      .regex(/\d/, "Debe contener al menos un número")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        "Debe contener al menos un carácter especial"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;

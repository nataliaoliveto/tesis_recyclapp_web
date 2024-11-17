import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(4, {
        message: "El mínimo del nombre son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del nombre son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z]{4,30}$/), {
        message: "El nombre puede incluir sólo letras",
      }),
    surname: z
      .string()
      .min(4, {
        message: "El mínimo del apellido son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del apellido son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z]{4,30}$/), {
        message: "El nombre puede incluir sólo letras",
      }),
    mail: z.string().email({
      message: "El mail no es válido",
    }),
    phone: z
      .string()
      .min(10, {
        message:
          "El número debe tener 10 caracteres de longitud, exceptuando el +54 9 ya pre establecidos.",
      })
      .max(10, {
        message:
          "El número debe tener 10 caracteres de longitud, exceptuando el +54 9 ya pre establecidos.",
      })
      .regex(new RegExp(/^[0-9]{10,10}$/), {
        message: "El teléfono puede incluir sólo 10 números",
      }),
    username: z
      .string()
      .min(4, {
        message:
          "El mínimo del nombre de usuario son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del nombre de usuario son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z0-9]{4,30}$/), {
        message: "El nombre de usuario puede incluir sólo letras y números",
      }),
    password: z
      .string()
      .min(8, {
        message: "El mínimo de la contraseña son 8 caracteres y el máximo 16",
      })
      .max(16, {
        message: "El máximo de la contraseña son 16 caracteres",
      })
      .regex(
        new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,16}$/),
        {
          message:
            "La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un caracter especial",
        }
      ),
    passwordTwice: z.string(),
    userType: z.enum(["CUSTOMER", "TIENDA"]),
  })
  .refine((data) => data.password === data.passwordTwice, {
    message: "Las contraseñas no coinciden",
    path: ["passwordTwice"],
  });

export type ValidationSchema =
  | z.infer<typeof loginSchema>
  | z.infer<typeof registerSchema>;

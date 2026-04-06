import { z } from "zod";
import { REG_RULES } from "@/config/rules";

interface TypeMessageSchemaText {
  formNameNotEmpty: string;
  formNameTooShort: string;
  formNameTooLong: string;
  formPhone: string;
  formEmail: string;
  formMessage: string;
  formMessageTooShort: string;
  formMessageTooLong: string;
}

function createSchema(text?: Partial<TypeMessageSchemaText>) {
  return z.object({
    name: z
      .string({ message: text?.formNameNotEmpty })
      .min(2, { message: text?.formNameTooShort })
      .max(20, { message: text?.formNameTooLong }),
    telephone: z.string().optional().refine((v) => !v || REG_RULES.PHONE_NUMBER.test(v), {
      message: text?.formPhone,
    }),
    email: z.string().optional().refine((v) => !v || REG_RULES.EMAIL.test(v), {
      message: text?.formEmail,
    }),
    content: z
      .string({ message: text?.formMessage })
      .min(5, { message: text?.formMessageTooShort })
      .max(500, { message: text?.formMessageTooLong }),
  });
}

export const messageSchema = createSchema();

export function createMessageSchema(text: TypeMessageSchemaText) {
  return createSchema(text);
}

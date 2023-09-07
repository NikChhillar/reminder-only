import { CollectionColors } from "@/lib/constants";
import { z } from "zod";

export const createCollection = z.object({
  name: z.string().min(3, {
    message: "Atleast write a proper name...",
  }),
  color: z
    .string()
    .refine((color) => Object.keys(CollectionColors).includes(color)),
});

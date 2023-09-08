import { z } from "zod";

export const createTaskSchema = z.object({
  collectionId: z.string(),
  content: z.string().min(5, {
    message: "Write a proper task....",
  }),
  expiresAt: z.date().optional(),
});

export type createTaskSchemaType = z.infer<typeof createTaskSchema>;

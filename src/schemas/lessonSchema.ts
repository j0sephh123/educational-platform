import { z } from "zod";

export const lessonSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1, "Lesson title cannot be empty"),
    content: z.string().min(1, "Lesson content cannot be empty"),
  })
  .strict();

export type Lesson = z.infer<typeof lessonSchema>;

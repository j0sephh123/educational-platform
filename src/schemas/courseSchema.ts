import { z } from "zod";
import { lessonSchema } from "./lessonSchema";

export const courseSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1, "Course title cannot be empty"),
    description: z.string().min(1, "Course description cannot be empty"),
    lessons: z.array(lessonSchema),
  })
  .strict();

export type Course = z.infer<typeof courseSchema>;

import { z } from "zod";
import { courseSchema } from "./courseSchema";

export const coursesListSchema = z.array(courseSchema);

export type CoursesList = z.infer<typeof coursesListSchema>;

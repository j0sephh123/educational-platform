import { createFileRoute } from "@tanstack/react-router";
import { getMockCourseMockLesson } from "../utils/mockApi";

export const Route = createFileRoute("/courses/$courseId/lessons/$lessonId")({
  component: SingleLesson,
  loader(ctx) {
    const { courseId, lessonId } = ctx.params;
    return getMockCourseMockLesson(courseId, lessonId);
  },
});

export default function SingleLesson() {
  const data = Route.useLoaderData();
  return (
    <div>
      {data.content}
    </div>
  );
}

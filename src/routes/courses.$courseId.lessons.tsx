import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { getMockCourseMockLessons } from "../utils/mockApi";

export const Route = createFileRoute("/courses/$courseId/lessons")({
  component: Lessons,
  loader: ({ params: { courseId } }) => getMockCourseMockLessons(courseId),
});

export default function Lessons() {
  const {courseId} = Route.useParams();
  const lessons = Route.useLoaderData();
  return (
    <div className="4">
      <h3>Lessons</h3>
      {lessons.map((lesson) => (
        <Link
          to={"/courses/$courseId/lessons/$lessonId"}
          params={{
            courseId,
            lessonId: lesson.id,
          }}
          key={lesson.id}
        >
          <h4>{lesson.title}</h4>
        </Link>
      ))}
      <Outlet />
    </div>
  );
}

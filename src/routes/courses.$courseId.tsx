import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { getMockCourse } from "../utils/mockApi";

export const Route = createFileRoute("/courses/$courseId")({
  component: CourseId,
  loader: ({ params: { courseId } }) => getMockCourse(courseId),
});

function CourseId() {
  const { description, lessons } = Route.useLoaderData();
  const { courseId } = Route.useParams();

  console.log("lessons", lessons);

  return (
    <>
      <div className="2">{description}</div>
      <div className="3">
        {lessons.length > 0 ? (
          <Link
            to="/courses/$courseId/lessons"
            params={{
              courseId,
            }}
          >
            <button>Lessons</button>
          </Link>
        ) : (
          <div>No lessons</div>
        )}
      </div>
      <Outlet />
    </>
  );
}

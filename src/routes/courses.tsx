import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/courses")({
  component: Courses,
});

function Courses() {
  return (
    <div>
      <h3>CoursesList</h3>
      <Link
        to="/courses/$courseId"
        params={{
          courseId: "1",
        }}
      >
        <li>JS Course</li>
      </Link>
      <Link
        to="/courses/$courseId"
        params={{
          courseId: "2",
        }}
      >
        <li>TS Course</li>
      </Link>
      <Outlet/>
    </div>
  );
}

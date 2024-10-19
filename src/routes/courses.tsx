import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { getMockCourses } from "../utils/mockApi";

export const Route = createFileRoute("/courses")({
  component: Courses,
  loader: getMockCourses,
});

function Courses() {
  const courses = Route.useLoaderData();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <div className='1'>
        <h3>CoursesList</h3>
        {courses.map((course) => (
          <Link
            to="/courses/$courseId"
            params={{
              courseId: course.id,
            }}
          >
            <li>{course.title}</li>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

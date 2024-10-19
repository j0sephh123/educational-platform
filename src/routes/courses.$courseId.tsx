import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseId")({
  component: CourseId,
  async loader(ctx) {
    console.log("loader", ctx);

    return new Promise<{ a: string }>((resolve) => {
      setTimeout(() => {
        resolve({ a: "123" });
      }, 500);
    });
  },
});

function CourseId() {
  const { courseId } = Route.useParams();
  // const { a } = Route.useLoaderData();

  return <div>Hello /courses/{courseId}!</div>;
}

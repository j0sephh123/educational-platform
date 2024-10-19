import { Course } from "../schemas/courseSchema";
import mockCourses from "./mockCourses";

export const getMockCourse = (courseId: Course["id"]) => {
  return withDelay(mockCourses.find((course) => course.id === courseId)!);
};

export const getMockCourses = () => {
  return withDelay(mockCourses);
};

export const getMockCourseMockLessons = (courseId: Course["id"]) => {
  return withDelay(
    mockCourses.find((course) => course.id === courseId)!.lessons
  );
};

export const getMockCourseMockLesson = (
  courseId: Course["id"],
  lessonId: Course["lessons"][0]["id"]
) => {
  return withDelay(
    mockCourses
      .find((course) => course.id === courseId)!
      .lessons.find((lesson) => lesson.id === lessonId)!
  );
};

function withDelay<T>(data: T, delay = 500) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

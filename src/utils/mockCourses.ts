import { CoursesList } from "../schemas/coursesListSchema";

const mockCourses: CoursesList = [
  {
    id: "1",
    title: "JS Course",
    description: "",
    lessons: [
      {
        id: "1",
        title: "Lesson 1",
        content: "Content 1",
      },
      {
        id: "2",
        title: "Lesson 2",
        content: "Content 2",
      },
      {
        id: "3",
        title: "Lesson 3",
        content: "Content 3",
      },
      {
        id: "4",
        title: "Lesson 4",
        content: "Content 4",
      },
    ],
  },
  {
    id: "2",
    title: "TS Course",
    description: "",
    lessons: [],
  },
];

export default mockCourses;

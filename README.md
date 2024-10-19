# Educational Platform

## Goal

Learn && Have Fun

Everything else is TBD..

## Tech stack

- **zod** should be used extensively

## Requirements

### **Goal**: Create a modular educational platform with only the client-side for now. The core features should be simple, intuitive, and buildable in small increments, so you can make steady progress without feeling overwhelmed.

---

### **Business Requirements for MVP (Frontend Only)**

#### 1. **Display a List of Courses**

- **Description**:
  You will display a simple list of available courses. Each course will have a title and a short description.
- **What You Need to Build**:

  - A page that lists all courses in the system.
  - Each course should have the following properties:
    - **Title** (e.g., "JavaScript Basics").
    - **Description** (e.g., "An introduction to JavaScript fundamentals").
    - **Unique ID** for routing purposes (e.g., `course-1`).
  - Each course item will be clickable, and clicking on it will take the user to the details page for that course.

#### 2. **View Course Details**

- **Description**:
  After clicking on a course, the user should see a detailed page with more information about the course, such as the title, full description, and a list of lessons within that course.
- **What You Need to Build**:

  - A course detail page that shows:
    - **Course Title**.
    - **Full Course Description**.
    - A list of lessons for that course (just the titles for now).
  - Each lesson should be a link that, when clicked, takes the user to the lesson's content page.

#### 3. **Display a List of Lessons per Course**

- **Description**:
  Each course contains several lessons. When viewing a course's details, there will be a list of all lessons within that course.
- **What You Need to Build**:

  - In the course details page, include:
    - A list of lesson titles (you can hardcode a few lessons for each course).
  - Each lesson should be clickable, and clicking on a lesson title should navigate the user to the lesson content page.

#### 4. **View Lesson Content**

- **Description**:
  Once a user clicks on a lesson, they should be able to see the lesson’s content. This is where you will display the actual educational material (for now, simple text-based content).
- **What You Need to Build**:

  - A lesson content page that shows:
    - **Lesson Title**.
    - **Lesson Content** (this can be a block of text, such as an explanation of the topic).
  - Each lesson belongs to a course, so the navigation will include course > lesson.

#### 5. **Basic Routing and Navigation**

- **Description**:
  You need basic navigation between different pages: the course list, course details, and lesson content pages.
- **What You Need to Build**:

  - Routing that handles:
    - **Home Page**: Displays the course list.
    - **Course Details Page**: Displays details of a specific course.
    - **Lesson Page**: Displays the content of a specific lesson.
  - Ensure users can navigate back to the previous pages, such as going back to the course list from course details, or from a lesson back to the course details.

#### 6. **User Interface Requirements**

- **Description**:
  The platform should be clean and intuitive, but don't focus on advanced UI/UX features. The goal is to get something functional that looks decent but is quick to build.
- **What You Need to Build**:

  - A basic layout with:
    - **Header**: A simple navigation bar or title that displays the platform name (e.g., "EduPlatform").
    - **Body**: A space for the main content (course lists, details, lessons).
    - **Simple List Display**: For courses and lessons, use simple lists (unordered lists or cards).
    - **Links**: Use links/buttons to allow navigation between courses and lessons.

---

### **Summary of What You Should Build First (in order)**

1. **Course List Page**: A list of hardcoded courses (title + description), each linking to course details.
2. **Course Details Page**: Show course title, description, and list of lessons for that course.
3. **Lesson Viewer Page**: Show lesson title and content when a user selects a lesson.
4. **Basic Routing**: Implement routing between course list, course details, and lesson content pages.
5. **Basic UI**: Keep the UI minimal and functional, just enough to display the data and navigate between pages.

---

### **Optional Next Steps (If You Have Time/Interest)**

Once you have these core features, you can move to small enhancements:

- **Add simple state management** (Zustand, Context API) if you need to manage selected courses or lessons globally.
- **Integrate some basic local storage** to save user progress (e.g., which lessons they've viewed).
- **Add a home page introduction or "about" page** to give users a brief overview of the platform.

---

### **Key to Success**: **Simplicity and Small Wins**

1. **Keep the data hardcoded**: Don't worry about data from APIs or complex state management. Hardcode the courses, lessons, and content.
2. **Focus on navigation**: Just make sure users can navigate between pages easily.
3. **Avoid overengineering**: Don't add extra features or try to make it look perfect—your goal is to get something minimal up and running.

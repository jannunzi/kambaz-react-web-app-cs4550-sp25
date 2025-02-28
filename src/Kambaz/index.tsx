import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";
import db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kambaz() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "RS107",
    name: "New Course",
    number: "New Course Number",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "Languages",
    credits: 3,
    description: "New Course Description",
    author: "654f9ec2ea7ead465908d1e3",
  });
  const addCourse = () => {
    console.log("Add new course: ", course);
    const newCourse = { ...course, _id: "RS" + Math.random().toString() };
    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
  };
  const deleteCourse = (courseId: string) => {
    console.log("Delete course with id: ", courseId);
    const newCourses = courses.filter((course) => course._id !== courseId);
    setCourses(newCourses);
  };
  const updateCourse = () => {
    const newCourses = courses.map((c) => {
      if (c._id === course._id) {
        return course;
      }
      return c;
    });
    setCourses(newCourses);
  };
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  updateCourse={updateCourse}
                  addCourse={addCourse}
                  deleteCourse={deleteCourse}
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />
        </Routes>
      </div>
    </div>
  );
}

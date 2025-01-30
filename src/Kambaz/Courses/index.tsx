import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Courses() {
  return (
    <div>
      <h2 className="text-danger">
        <GiHamburgerMenu className="me-3" />
        Courses
      </h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h3>Quizzes</h3>} />
            <Route path="Grades" element={<h3>Grades</h3>} />
            <Route path="Zoom" element={<h3>Zoom</h3>} />
            <Route path="People" element={<h3>Peple</h3>} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
          </Routes>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

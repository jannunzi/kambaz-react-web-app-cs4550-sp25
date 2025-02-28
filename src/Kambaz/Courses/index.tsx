import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
// import db from "../Database";
import PeopleTable from "./People/Table";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div>
      <h2 className="text-danger">
        <GiHamburgerMenu className="me-3" />
        {course?.name} &gt; {pathname.split("/").pop()}
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
            <Route path="People" element={<PeopleTable />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
          </Routes>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

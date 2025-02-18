import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Piazza",
    "People",
    "Grades",
    "Zoom",
  ];
  return (
    <ListGroup className="rounded-0 wd-secondary-nav-list">
      {links.map((link) => (
        <ListGroup.Item
          active={pathname.includes(link)}
          className="text-danger bg-white border-0"
          as={Link}
          to={`/Kambaz/Courses/${cid}/${link}`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

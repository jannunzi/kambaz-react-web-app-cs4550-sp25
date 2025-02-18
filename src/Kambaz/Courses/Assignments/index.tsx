import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { ListGroup } from "react-bootstrap";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ListGroup id="wd-assignment-list">
        {assignments.map((assignment: any) => (
          <ListGroup.Item
            as={Link}
            to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
            className="wd-assignment-list-item"
          >
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

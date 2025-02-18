import { useParams } from "react-router-dom";
import db from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum); // 10

  return (
    <div id="wd-assignments-editor">
      <input id="wd-name" value={assignment?.title} className="form-control" />
      <br />
      <br />
      <textarea
        id="wd-description"
        value={assignment?.description}
        className="form-control"
      >
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={assignment?.points} />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}

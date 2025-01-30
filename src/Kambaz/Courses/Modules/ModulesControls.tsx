import { Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div>
      <Button variant="secondary me-1">Expand All</Button>
      <Button variant="secondary me-1">View Progress</Button>
      <Dropdown className="d-inline me-1">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <FaCheckCircle className="text-success" /> Publish All
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <FaCheckCircle className="text-success" /> Publish all modules
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Publish modules only</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="danger me-1">+ Module</Button>
    </div>
  );
}

import { Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button onClick={handleShow} variant="danger me-1">
        + Module
      </Button>
      <ModuleEditor
        dialogTitle="Add New Module"
        show={show}
        handleClose={handleClose}
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}

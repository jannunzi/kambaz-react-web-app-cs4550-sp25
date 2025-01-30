import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h3>Bootstrap Grids</h3>
      <Row>
        <Col sm={2} xxl={1} className="bg-success text-white">
          <h1>Col 1</h1>
        </Col>
        <Col className="bg-danger text-white">
          <h1>Col 2</h1>
        </Col>
        <Col sm={2} xxl={3} className="bg-primary text-white">
          <h1>Col 3</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="bg-success text-white">
          <h1>Col 1</h1>
        </Col>
        <Col className="bg-danger text-white">
          <h1>Col 2</h1>
        </Col>
        <Col className="bg-primary text-white">
          <h1>Col 3</h1>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaBook, FaCalendar, FaMessage } from "react-icons/fa6";
import { HiBeaker } from "react-icons/hi";

export default function KambazNavigation() {
  return (
    <ListGroup className=" d-none d-md-block rounded-0 bg-black position-fixed top-0 bottom-0 left-0">
      <ListGroup.Item
        action
        className="bg-black text-white border-0 text-center"
        href="https://www.northeastern.edu/"
      >
        Northeastern
      </ListGroup.Item>

      <ListGroup.Item
        className="bg-white text-danger border-0 text-center"
        as={Link}
        to="/Kambaz/Account"
      >
        <IoPersonCircleOutline className="fs-1" />
        <br />
        Account
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/Dashboard"
      >
        <BsSpeedometer2 className="fs-1" />
        <br />
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/Courses"
      >
        <FaBook className="fs-1" /> <br />
        Courses
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/Inbox"
      >
        <FaMessage className="fs-1" />
        <br />
        Inbox
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/Calendar"
      >
        <FaCalendar className="fs-1" />
        <br />
        Calendar
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/History"
      >
        History
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Kambaz/Help"
      >
        Help
      </ListGroup.Item>
      <ListGroup.Item
        className="bg-black text-white border-0 text-center"
        as={Link}
        to="/Labs"
      >
        <HiBeaker className="fs-1" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}

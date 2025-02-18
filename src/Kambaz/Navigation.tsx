import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaBook, FaCalendar, FaMessage } from "react-icons/fa6";
import { HiBeaker } from "react-icons/hi";
import { BiHelpCircle, BiHistory } from "react-icons/bi";
import { FaCreativeCommons } from "react-icons/fa";

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    {
      to: "/Kambaz/Account",
      // icon: <IoPersonCircleOutline className="fs-1 text-danger" />,
      icon: IoPersonCircleOutline,
      text: "Account",
    },
    {
      to: "/Kambaz/Dashboard",
      // icon: <BsSpeedometer2 className="fs-1 text-danger" />,
      icon: BsSpeedometer2,
      text: "Dashboard",
    },
    {
      to: "/Kambaz/Courses",
      // icon: <FaBook className="fs-1 text-danger" />,
      icon: FaBook,
      text: "Courses",
    },
    {
      to: "/Kambaz/Inbox",
      // icon: <FaMessage className="fs-1 text-danger" />,
      icon: FaMessage,
      text: "Inbox",
    },
    {
      to: "/Kambaz/Calendar",
      // icon: <FaCalendar className="fs-1 text-danger" />,
      icon: FaCalendar,
      text: "Calendar",
    },
    {
      to: "/Kambaz/History",
      // icon: <BiHistory className="fs-1 text-danger" />,
      icon: BiHistory,
      text: "History",
    },
    {
      to: "/Kambaz/Help",
      icon: BiHelpCircle,
      text: "Help",
    },
    {
      to: "/Kambaz/Commons",
      icon: FaCreativeCommons,
      text: "Commons",
    },
    {
      to: "/Labs",
      // icon: <HiBeaker className="fs-1" />,
      icon: HiBeaker,
      text: "Labs",
    },
  ];
  return (
    <ListGroup className=" d-none d-md-block rounded-0 bg-black position-fixed top-0 bottom-0 left-0">
      <ListGroup.Item
        action
        className={`bg-black text-white border-0 text-center`}
        href="https://www.northeastern.edu/"
      >
        Northeastern
      </ListGroup.Item>

      {links.map((link, index) => (
        <ListGroup.Item
          key={index}
          className={`${
            pathname.includes(link.text) ? "bg-white" : "bg-black"
          }  text-white border-0 text-center`}
          as={Link}
          to={link.to}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          <span
            className={`${
              pathname.includes(link.text) ? "text-danger" : "text-white"
            }`}
          >
            {link.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

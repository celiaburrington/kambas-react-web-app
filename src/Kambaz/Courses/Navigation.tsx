import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      {links.map((link) => (
        <ListGroup.Item
          as={Link}
          to={`/Kambaz/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

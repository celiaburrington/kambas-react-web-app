import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import EditAssignmentButtons from "./EditAssignmentButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <EditAssignmentButtons /> 
              <div className="float-start ps-3">
              <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link">A1</a><br />
                <div className="fs-6">Multiple Modules | <b>Not available until</b> May 6th at 12:00am |<br />
                <b>Due</b> May 13th at 11:59pm | 100 pts</div>
              </div>
               <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <EditAssignmentButtons /> 
              <div className="float-start ps-3">
              <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link">A2</a><br />
                <div className="fs-6">Multiple Modules | <b>Not available until</b> May 13th at 12:00am |<br />
                <b>Due</b> May 20th at 11:59pm | 100 pts</div>
              </div>
               <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <EditAssignmentButtons /> 
              <div className="float-start ps-3">
              <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link">A2</a><br />
                <div className="fs-6">Multiple Modules | <b>Not available until</b> May 20th at 12:00am |<br />
                <b>Due</b> May 27th at 11:59pm | 100 pts</div>
              </div>
               <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

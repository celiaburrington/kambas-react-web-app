/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect, useState } from "react";
import AssigmentDeleter from "./AssignmentDeleter";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  // for delete assignment dialog
  const [show, setShow] = useState(false);
  const [toDelete, setToDelete] = useState({ _id: "", title: "" });
  const handleClose = () => setShow(false);
  const handleShow = (assignment: any) => {
    setToDelete(assignment);
    setShow(true);
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <AssignmentsControls cid={cid ? cid : ""} />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <BsGripVertical className="float-start me-2 fs-3" />
                {isFaculty && (
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                  >
                    <FaRegEdit className="float-start text-success fs-4" />
                  </a>
                )}
                <div className="float-start ps-3">
                  {assignment.title}
                  <br />
                  <div className="fs-6">
                    Multiple Modules | <b>Not available until</b>{" "}
                    {new Date(assignment.available + ":").toLocaleDateString(
                      "en-US"
                    )}
                    , 12:00 AM |
                    <br />
                    <b>Due </b>
                    {new Date(assignment.due + ":").toLocaleDateString("en-US")}
                    , 11:59 PM | {assignment.points}
                    pts
                  </div>
                </div>
                <LessonControlButtons />
                <FaTrash
                  className="float-end text-danger me-2 mt-1"
                  onClick={() => handleShow(assignment)}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      <AssigmentDeleter
        show={show}
        handleClose={handleClose}
        dialogTitle={`Are you sure you want to remove ${toDelete.title}?`}
        deleteAssignment={() => removeAssignment(toDelete._id)}
      />
    </div>
  );
}

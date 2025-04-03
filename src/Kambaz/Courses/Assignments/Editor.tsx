/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  // const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState(
    assignments.find((assignment: any) => assignment._id === aid) || {
      _id: aid,
      name: "",
      course: cid,
      points: 0,
      description: "",
      new: true,
    }
  );

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = await coursesClient.createAssignmentForCourse(
      cid,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };

  const modifyAssignment = async () => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div id="wd-assignments-editor" className="m-2">
      <FormGroup className="mb-3">
        <FormLabel>Assigment Name</FormLabel>
        <FormControl
          type="text"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl
          as="textarea"
          rows={6}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </FormGroup>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              defaultValue={0}
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Assigment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <Form.Select>
              <option value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Submission Type
            </Form.Label>
            <Col sm={10}>
              <Form.Select>
                <option value="ONLINE">Online</option>
                <option value="PERSON">In Person</option>
              </Form.Select>
              <Form.Check
                className="mt-3"
                type="checkbox"
                label="Text Entry"
                checked
              />
              <Form.Check type="checkbox" label="Website URL" />
              <Form.Check type="checkbox" label="Media Recordings" />
              <Form.Check type="checkbox" label="Student Annotation" />
              <Form.Check type="checkbox" label="File Uploads" />
            </Col>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={2}>
              Assign
            </Form.Label>
            <Col sm={10}>
              <Form.Group className="mb-2">
                <Form.Label>Assign to</Form.Label>
                <Form.Control type="text" value="Everyone" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Available from</Form.Label>
                <Form.Control
                  type="date"
                  value={assignment.available}
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      available: new Date(e.target.value)
                        .toISOString()
                        .split("T")[0],
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Due</Form.Label>
                <Form.Control
                  type="date"
                  value={assignment.due}
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      due: new Date(e.target.value).toISOString().split("T")[0],
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Until</Form.Label>
                <Form.Control
                  type="date"
                  value={assignment.until}
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      until: new Date(e.target.value)
                        .toISOString()
                        .split("T")[0],
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
      <hr />
      <a href={`#/Kambaz/Courses/${cid}/Assignments`}>
        <Button
          variant="danger"
          className="me-1 float-end"
          onClick={() => {
            if (assignment.new) {
              createAssignmentForCourse();
            } else {
              modifyAssignment();
            }
          }}
        >
          Save
        </Button>
      </a>
      <a href={`#/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="secondary" className="me-1 float-end">
          Cancel
        </Button>
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

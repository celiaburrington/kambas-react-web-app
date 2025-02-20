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

import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

  if (!assignment) {
    return <div>Assigment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3">
        <FormLabel>Assigment Name</FormLabel>
        <FormControl type="text" value={assignment.title}></FormControl>
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl as="textarea" rows={6} value={assignment.description} />
      </FormGroup>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={assignment.points} />
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
                <Form.Label>Due</Form.Label>
                <Form.Control
                  type="date"
                  value={new Date(assignment?.due).toISOString().split("T")[0]}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Available from</Form.Label>
                <Form.Control
                  type="date"
                  value={
                    new Date(assignment?.available).toISOString().split("T")[0]
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
      <hr />
      <Button variant="danger" className="me-1 float-end">
        Save
      </Button>
      <Button variant="secondary" className="me-1 float-end">
        Cancel
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

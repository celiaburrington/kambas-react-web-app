import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3">
        <FormLabel>Assigment Name</FormLabel>
        <FormControl type="text" value="A1"></FormControl>
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl
          as="textarea"
          rows={6}
          value="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
The landing page should be the Kambaz application with a link to the Lab exercises.
Lab 1 should be the landing page of the Lab exercises and should include the following:
Your full name and section Links to each of the lab assignments Link to the Kambaz application 
Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page."
        />
      </FormGroup>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value="100" />
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
                <Form.Control type="date" value="2024-05-13" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" value="2024-05-06" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" value="2024-05-20" />
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
      </Button><br /><br /><br /><br /><br />
    </div>
  );
}

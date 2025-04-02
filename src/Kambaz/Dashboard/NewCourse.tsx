/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl } from "react-bootstrap";

export default function NewCourse({
  course,
  setCourse,
  addNewCourse,
  updateCourse,
}: {
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  updateCourse: () => void;
}) {
  return (
    <div id="wd-new-course-menu">
      <h5>
        New Course
        <Button
          className="btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </Button>
        <Button
          className="btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </Button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
    </div>
  );
}

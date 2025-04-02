/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";

export default function EditCourseButtons({
  course,
  setCourse,
  deleteCourse,
}: {
  course: any;
  setCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
}) {
  return (
    <>
      <Button
        onClick={(event) => {
          event.preventDefault();
          deleteCourse(course._id);
        }}
        className="btn-danger float-end"
        id="wd-delete-course-click"
      >
        Delete
      </Button>
      <Button
        id="wd-edit-course-click"
        onClick={(event) => {
          event.preventDefault();
          setCourse(course);
        }}
        className="btn-warning me-2 float-end"
      >
        Edit
      </Button>
    </>
  );
}

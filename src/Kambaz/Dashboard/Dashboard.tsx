/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import NewCourse from "./NewCourse";
import EditCourseButtons from "./EditCourseButtons";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard({ courses }: { courses: any[] }) {
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    iconImage: "reactjs.png",
    description: "New Description",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  // enrollment related vars
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [enrolling, setEnrolling] = useState(false);
  const isEnrolled = (user: string, course: string) => {
    return enrollments.find(
      (enrollment: any) =>
        enrollment.user === user && enrollment.course === course
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="float-start">
        Dashboard
      </h1>
      <Button
        className="float-end btn-primary mt-2"
        onClick={() => setEnrolling(!enrolling)}
      >
        Enrollments
      </Button>
      <br />
      <br />
      <hr />
      {isFaculty && (
        <NewCourse
          course={course}
          setCourse={setCourse}
          addNewCourse={() => dispatch(addCourse(course))}
          updateCourse={() => dispatch(updateCourse(course))}
        />
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course: any) =>
              enrolling ? true : isEnrolled(currentUser._id, course._id)
            )
            .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src={`images/${course.iconImage}`}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>
                      <Button variant="primary"> Go </Button>
                      {enrolling &&
                        (isEnrolled(currentUser._id, course._id) ? (
                          <Button
                            variant="danger"
                            className="float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(
                                deleteEnrollment({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(
                                addEnrollment({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
                            }}
                          >
                            Enroll
                          </Button>
                        ))}
                      {isFaculty && !enrolling && (
                        <EditCourseButtons
                          course={course}
                          setCourse={setCourse}
                          deleteCourse={(courseId: any) =>
                            dispatch(deleteCourse(courseId))
                          }
                        />
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

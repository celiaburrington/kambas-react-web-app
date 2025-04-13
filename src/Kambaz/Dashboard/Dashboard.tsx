/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import NewCourse from "./NewCourse";
import EditCourseButtons from "./EditCourseButtons";
import { useState } from "react";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";
import * as enrollmentClient from "./client";

export default function Dashboard({
  courses,
  myCourses,
  setCourses,
  setMyCourses,
}: {
  courses: any[];
  myCourses: any[];
  setCourses: (courses: any[]) => void;
  setMyCourses: (courses: any[]) => void;
}) {
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    iconImage: "reactjs.png",
    description: "New Description",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  // enrollment related vars
  const [enrolling, setEnrolling] = useState(false);
  const isEnrolled = (course: string) => {
    const res = myCourses.find((c: any) => c._id === course);
    return res;
  };

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setMyCourses([...myCourses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const enrollInCourse = async (course: any) => {
    await enrollmentClient.createEnrollement(course._id);
    setMyCourses([...myCourses, course]);
  };

  const unenrollFromCourse = async (courseId: string) => {
    await enrollmentClient.deleteEnrollement(courseId);
    setMyCourses(myCourses.filter((course) => course._id !== courseId));
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
          addNewCourse={() => addNewCourse()}
          updateCourse={() => updateCourse()}
        />
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(enrolling ? courses : myCourses).map((course: any) => (
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
                      (isEnrolled(course._id) ? (
                        <Button
                          variant="danger"
                          className="float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            unenrollFromCourse(course._id);
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
                            enrollInCourse(course);
                          }}
                        >
                          Enroll
                        </Button>
                      ))}
                    {isFaculty && !enrolling && (
                      <EditCourseButtons
                        course={course}
                        setCourse={setCourse}
                        deleteCourse={(courseId: any) => deleteCourse(courseId)}
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

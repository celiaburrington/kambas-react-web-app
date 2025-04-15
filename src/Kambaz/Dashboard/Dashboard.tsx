/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import NewCourse from "./NewCourse";
import EditCourseButtons from "./EditCourseButtons";
import { useState } from "react";
import * as courseClient from "../Courses/client";
import * as userClient from "../Account/client";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard({
  courses,
  setCourses,
  enrolling,
  setEnrolling,
}: {
  courses: any[];
  setCourses: (courses: any[]) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
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
  const dispatch = useDispatch();

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
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

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
      dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
      dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="float-start">
        Dashboard
      </h1>
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
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
          {courses.map((course: any) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "300px" }}
              key={course._id}
            >
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
                    {enrolling && (
                      <Button
                        className={`${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import ProtectedCourseRoute from "./Courses/ProtectedRoute";

export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.courseReducer);

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedCourseRoute>
                <Courses courses={courses} />
              </ProtectedCourseRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isEnrolled = enrollments.find(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );
  const isAdmin = currentUser && currentUser.role === "ADMIN";

  if ((currentUser && isEnrolled) || isAdmin) {
    return children;
  } else if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  } else {
    return <Navigate to={"/Kambaz/Dashboard"} />;
  }
}

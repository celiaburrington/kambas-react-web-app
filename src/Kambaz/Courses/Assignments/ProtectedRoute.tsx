/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (currentUser.role === "FACULTY") {
    return children;
  } else {
    return <Navigate to={pathname.substring(0, pathname.lastIndexOf("/"))} />;
  }
}

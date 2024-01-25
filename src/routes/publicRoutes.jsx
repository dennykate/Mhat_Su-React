import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("@/features/login/Login"));

const publicRoutes = [
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
];

export default publicRoutes;

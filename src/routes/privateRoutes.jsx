import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { Wrapper } from "@/components";

const Dashboard = lazy(() => import("@/features/dashboard/Dashboard"));

const privateRoutes = [
  {
    path: "/dashboard",
    element: (
      <Wrapper>
        <Dashboard />
      </Wrapper>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/dashboard"} />,
  },
];

export default privateRoutes;

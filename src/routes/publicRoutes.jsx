import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { Wrapper } from "@/components";

const Main = lazy(() => import("@/features/main/Main"));

const publicRoutes = [
  {
    path: "/",
    element: (
      <Wrapper>
        <Main />
      </Wrapper>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

export default publicRoutes;

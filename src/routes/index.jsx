import { useRoutes } from "react-router-dom";

import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const Routes = () => {
  const isAuth = false;

  const routes = isAuth ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Routes;

import { useRoutes } from "react-router-dom";

import { useToken } from "@/hooks";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const Routes = () => {
  const generate = useToken();

  const { isExpired, forceStop } = generate();

  const isAuth = !isExpired | !forceStop;

  const routes = isAuth ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Routes;

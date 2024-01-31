import { useLocation } from "react-router-dom";
import { useCallback } from "react";

import useAuth from "./useAuth";
import config from "@/config";
import useToken from "./useToken";

const useRefreshToken = () => {
  const { pathname } = useLocation();
  const { login, logout } = useAuth();
  const generateToken = useToken();

  return useCallback(async () => {
    const { refresh_token, isExpired } = generateToken();

    if (isExpired) {
      const res = await fetch(config.baseUrl + "/auth/refresh-token", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refresh_token,
        }),
      });
      const data = await res.json();

      if (data?.success) {
        login(data.data);
      } else {
        logout();
      }
    }
  }, [pathname]);
};

export default useRefreshToken;

import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

import useLocalstorage from "./useLocalstorage";
import useAuth from "./useAuth";
import config from "@/config";
import { useNavigate } from "react-router-dom";

const useInterceptor = () => {
  const navigate = useNavigate();
  const { get } = useLocalstorage();
  const { login, logout } = useAuth();

  return useCallback(async () => {
    const access_token = get("access_token");
    const refresh_token = get("refresh_token");

    if (!access_token) return navigate("/");

    const payload = jwtDecode(access_token);

    const isExpired = dayjs.unix(payload.exp).diff(dayjs()) < 1;

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
  }, []);
};

export default useInterceptor;

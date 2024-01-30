import { useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import useLocalstorage from "./useLocalstorage";
import useAuth from "./useAuth";
import config from "@/config";

const useInterceptor = (isDisable) => {
  const { get } = useLocalstorage();
  const auth = useAuth();

  const checkAccessToken = useCallback(() => {
    if (isDisable) return;

    const access_token = get("access_token");
    const refresh_token = get("refresh_token");

    const payload = jwtDecode(access_token);

    const currentTime = new Date().getTime();

    console.log(currentTime > payload.exp);

    if (currentTime > payload.exp) {
      console.log(refresh_token);
      fetch(config.baseUrl + "/auth/refresh-token", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refresh_token,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, []);

  useEffect(() => checkAccessToken(), [checkAccessToken]);
};

export default useInterceptor;

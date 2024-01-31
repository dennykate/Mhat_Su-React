import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

import useLocalstorage from "./useLocalstorage";

const useToken = () => {
  const { get } = useLocalstorage();

  return () => {
    const access_token = get("access_token");
    const refresh_token = get("refresh_token");

    if (!access_token) {
      return { forceStop: true };
    }

    const payload = jwtDecode(access_token);

    const isExpired = dayjs.unix(payload.exp).diff(dayjs()) < 1;

    return { isExpired, access_token, refresh_token, forceStop: false };
  };
};

export default useToken;

import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

import { useEncryptStorage } from "use-encrypt-storage";

const useToken = () => {
  const { get } = useEncryptStorage();

  return () => {
    try {
      const access_token = get("access_token");
      const refresh_token = get("refresh_token");

      console.log("access_token", access_token);

      if (!access_token) {
        return { forceStop: true, isExpired: true };
      }

      const payload = jwtDecode(access_token);

      const isExpired = dayjs.unix(payload.exp).diff(dayjs()) < 1;

      return { isExpired, access_token, refresh_token, forceStop: false };
    } catch (error) {
      return { forceStop: true };
    }
  };
};

export default useToken;

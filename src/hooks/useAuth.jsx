import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";

import useLocalstorage from "./useLocalstorage";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const { set } = useLocalstorage();

  return useCallback((data) => {
    const payload = jwtDecode(data.access_token);

    set("access_token", data.access_token);
    set("refresh_token", data.refresh_token);
    set("profile", JSON.stringify(payload.profile));

    navigate("/mama");
  }, []);
};

export default useAuth;

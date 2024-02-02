import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { useCryptStorage } from "use-crypt-storage";

const useAuth = () => {
  const navigate = useNavigate();
  const { set, remove } = useCryptStorage();

  const login = useCallback((data) => {
    const payload = jwtDecode(data.access_token);

    set("access_token", data.access_token);
    set("refresh_token", data.refresh_token);
    set("profile", JSON.stringify(payload.profile));

    navigate("/mama");
  }, []);

  const logout = useCallback(() => {
    remove("access_token");
    remove("refresh_token");
    remove("profile");

    console.log("navigate to login page");
    navigate("");
  }, []);

  return { login, logout };
};

export default useAuth;

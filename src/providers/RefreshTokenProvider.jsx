import useRefreshToken from "@/hooks/useRefreshToken";
import { useEffect } from "react";

const RefreshTokenProvider = ({ children }) => {
  const refreshToken = useRefreshToken();

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  return <div>{children}</div>;
};

export default RefreshTokenProvider;

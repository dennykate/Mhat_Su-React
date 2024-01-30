import useMutate from "@/hooks/useMuate";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = ({ setToken }) => {
  const [onSubmit] = useMutate({
    navigateBack: false,
    callback: (data) => {
      console.log("data", data);
      setToken(data?.access_token);
    },
  });

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      onSubmit("/auth/google", {
        access_token: tokenResponse?.access_token,
      });
    },
  });

  return <button onClick={login}>Google Login</button>;
};

export default GoogleAuthButton;

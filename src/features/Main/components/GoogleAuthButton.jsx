import useAuth from "@/hooks/useAuth";
import useMutate from "@/hooks/useMuate";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = ({ setToken }) => {
  const { login } = useAuth();

  const [onSubmit] = useMutate({
    navigateBack: false,
    callback: (data) => {
      setToken(data?.access_token);
      login(data);
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      onSubmit("/auth/google", {
        access_token: tokenResponse?.access_token,
      });
    },
  });

  return <button onClick={googleLogin}>Google Login</button>;
};

export default GoogleAuthButton;

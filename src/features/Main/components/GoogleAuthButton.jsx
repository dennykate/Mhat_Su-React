import { useAuth, useMutate } from "@/hooks";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = () => {
  const { login } = useAuth();

  const [onSubmit] = useMutate({
    navigateBack: false,
    callback: (data) => {
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

  return (
    <button
      onClick={googleLogin}
      className="" // style with tailwind css here
    >
      Google Login
    </button>
  );
};

export default GoogleAuthButton;

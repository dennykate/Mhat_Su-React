import { useAuth, useMutate } from "@/hooks";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookAuthButton = () => {
  const { login } = useAuth();

  const [onSubmit] = useMutate({
    navigateBack: false,
    callback: (data) => {
      login(data);
    },
  });

  const onSuccessHandler = (res) => {
    if (res) {
      return onSubmit("/auth/facebook", {
        access_token: res?.accessToken,
      });
    }
  };

  return (
    <FacebookLogin
      appId={import.meta.env.VITE_FACEBOOK_APP_ID}
      onSuccess={onSuccessHandler}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      render={({ onClick }) => (
        <button onClick={onClick}>Facebook Login</button>
      )}
    />
  );
};

export default FacebookAuthButton;

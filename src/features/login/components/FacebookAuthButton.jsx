import useAuth from "@/hooks/useAuth";
import useMutate from "@/hooks/useMuate";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookAuthButton = ({ setToken }) => {
  const auth = useAuth();

  const [onSubmit] = useMutate({
    callback: (data) => {
      setToken(data?.access_token);
      auth(data);
    },
    disableCheckToken: true,
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

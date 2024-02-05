import { FacebookAuthButton, GoogleAuthButton } from "./components";

const Main = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen gap-4 flex-col overflow-hidden">
      <GoogleAuthButton />
      <FacebookAuthButton />
    </div>
  );
};

export default Main;

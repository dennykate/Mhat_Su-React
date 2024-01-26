import { useState } from "react";

import { FacebookAuthButton, GoogleAuthButton } from "./components";

const Login = () => {
  const [token, setToken] = useState("");

  return (
    <div className="flex justify-center items-center w-full h-screen gap-4 flex-col overflow-hidden">
      <input
        type="text"
        name=""
        id=""
        value={token}
        onChange={() => {}}
        className="w-[500px]"
      />
      <GoogleAuthButton setToken={setToken} />
      <FacebookAuthButton setToken={setToken} />
    </div>
  );
};

export default Login;

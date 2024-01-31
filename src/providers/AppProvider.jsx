/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { store } from "@/redux/store";
import RefreshTokenProvider from "./RefreshTokenProvider";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RefreshTokenProvider>{children}</RefreshTokenProvider>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

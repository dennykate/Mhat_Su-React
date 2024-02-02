/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MantineProvider } from "@mantine/core";
import { CryptProvider } from "use-crypt-storage";

import { store } from "@/redux/store";
import RefreshTokenProvider from "./RefreshTokenProvider";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <MantineProvider>
            <CryptProvider secretKey={import.meta.env.VITE_SECRET_KEY}>
              <RefreshTokenProvider>{children}</RefreshTokenProvider>
            </CryptProvider>
          </MantineProvider>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MantineProvider } from "@mantine/core";
import { EncryptProvider } from "use-encrypt-storage";

import { store } from "@/services/store";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <MantineProvider>
            <EncryptProvider secretKey={import.meta.env.VITE_SECRET_KEY}>
              {children}
            </EncryptProvider>
          </MantineProvider>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

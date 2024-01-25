/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { store } from "@/redux/store";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          {children}
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

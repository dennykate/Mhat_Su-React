/* eslint-disable react/prop-types */
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

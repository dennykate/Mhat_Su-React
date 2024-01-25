/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;

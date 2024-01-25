/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { WrapperLoading } from "./loadings";

const Wrapper = ({ children }) => {
  return <Suspense fallback={<WrapperLoading />}>{children}</Suspense>;
};

export default Wrapper;

import React from "react";
import { WrapperContainer } from "./style";

const Wrapper = ({ children }) => {
  return (
    <WrapperContainer>{children}</WrapperContainer>
  );
}

export default Wrapper;

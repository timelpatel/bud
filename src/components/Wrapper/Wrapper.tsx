import React from "react";
import { WrapperContainer } from "./style";

interface Props {
  children: JSX.Element
}

export default function Wrapper({ children }: Props) {
  return (
    <WrapperContainer>{children}</WrapperContainer>
  );
}

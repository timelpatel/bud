import React from "react";
import { HeaderContainer, Logo } from "./style";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <HeaderContainer>
      <Logo>{title}</Logo>
    </HeaderContainer>
  );
}

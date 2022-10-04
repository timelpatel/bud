import React from "react";
import { HeaderContainer, Logo } from "./style";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Logo>{title}</Logo>
    </HeaderContainer>
  );
};

export default Header;

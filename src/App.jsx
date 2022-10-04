import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Transactions from "./container/transactions/Transactions";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />

      <Header title="Bud test" />

      <Wrapper>
        <Transactions />
      </Wrapper>
    </>
  );
}

export default App;

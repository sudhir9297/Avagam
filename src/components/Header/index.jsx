import React from "react";
import styled from "styled-components";

function Header() {
  return <HeaderContainer>Header</HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100vw;
  position: relative;

  border: 1px solid red;
`;

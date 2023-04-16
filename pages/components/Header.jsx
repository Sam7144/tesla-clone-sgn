import React, { useState } from "react";
import styled from "styled-components";
function Header() {
  const [menuState, setMenuState] = useState(false);
  return (
    <Container>

        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <Menu>
          <a href="/model/models">Model S</a>
          <a href="/model/model3">Model 3</a>
          <a href="/model/modelx">Model X</a>
          <a href="/model/modely">Model Y</a>
          <a href="/solarroof">Solar Roof</a>
          <a href="/solarpanel">Solar Panel</a>
          <a href="/powerwall">Power Wall</a>
        </Menu>
        <RightMenu>
          <a href="/shop">Shop</a>
          <a href="/">Tesla Account</a>
          <Image
            src="/images/icon-menu.svg"
            onClick={() => setMenuState(true)}
            alt="menu"
          />
        </RightMenu>
        <BurgerMenu show={menuState}>
          <CloseWrapper>
            <Close
              src="/images/icon-close-menu.svg"
              onClick={() => setMenuState(false)}
              alt="menu"
            />
          </CloseWrapper>
          <li>
            <a href="/model/models">model s</a>
          </li>
          <li>
            <a href="/model/model3">model 3</a>
          </li>
          <li>
            <a href="/model/modelx">model x</a>
          </li>
          <li>
            <a href="/model/modely">model y</a>
          </li>
          <li>
            <a href="/powerwall">powerwall</a>
          </li>
          <li>
            <a href="/solarpanel">solar panels</a>
          </li>
          <li>
            <a href="/solarroof">solar roofs</a>
          </li>
        </BurgerMenu>
    
    </Container>
  );
}

export default Header;
export const Container = styled.div`
z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;`;
export const widthContiner = styled.div`
  
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 68.75em) {
    display: none;
  }
`;
export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
export const Image = styled.img`
  height: 17px !important;
  width: 17px;
  cursor: pointer;
`;
export const Close = styled.img`
  height: 17px !important;
  width: 17px;
  cursor: pointer;
`;
export const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding-block: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

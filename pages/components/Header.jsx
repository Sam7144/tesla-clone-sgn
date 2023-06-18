import { signOut, useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
//import { Store } from "@/store2/Store";

function Header() {
  const [menuState, setMenuState] = useState(false);
  const { data: session } = useSession();
  //const { state, dispatch } = useContext(Store);
  const logout = () => {
    signOut();
  };
  
 
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Menu>
        <a href="/model/models" className="opacity-70">
          Model S
        </a>
        <a href="/model/model3" className="opacity-70">Model 3</a>
        <a href="/model/modelx" className="opacity-70">Model X</a>
        <a href="/model/modely" className="opacity-70">Model Y</a>
        <a href="/solarroof" className="opacity-70">Solar Roof</a>
        <a href="/solarpanel" className="opacity-70">Solar Panel</a>
        <a href="/powerwall" className="opacity-70">Power Wall</a>
      </Menu>
      <RightMenu>
        <a href="/cart" className="relative items-center flex mt-1">
          <FaOpencart className="h-8 w-8 " />
          <p className="absolute -top-0 right-1 flex items-center justify-center bg-red-600 text-white h-5 w-5 text-sm font-bold rounded-full">
           {/* {state.cart.cartItems.length} */}
          </p>
        </a>
        {session ? (
          <a
            className="text-black bg-transparent rounded-lg 
                     px-2.5 py-1.5 hover:text-white hover:bg-gray-800
                      cursor-pointer hover:bg-opacity-30 transition-colors mr-2"
            onClick={logout}
          >
            logout
          </a>
        ) : (
          <a href="/login"
            className="text-black bg-transparent rounded-lg 
          px-2.5 py-1.5 hover:text-white hover:bg-gray-800
           cursor-pointer hover:bg-opacity-30 transition-colors mr-2"
          >
            signin
          </a>
        )}
        <span className="text-base font-semibold mx-2 bg-red-600 text-black px-2 rounded-full">
          {session ? `${session.user?.name?.substring(0, 1)}` : ""}
        </span>{" "}
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
  right: 0;
`;
export const widthContiner = styled.div``;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
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

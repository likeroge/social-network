import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  grid-area: h;
  background-color: rgb(95, 74, 74);

  display: flex;

  img {
    background-color: brown;
    display: block;
    width: 90px;
    height: 100%;
  }

  span {
    margin-top: 10px;
    margin: auto;
    width: 100px;
    /* margin-top: 10px; */
    font-weight: bold;
    font-size: 40px;
    color: white;
  }
`;

const Head = styled.header``;

const Header = () => {
  return (
    <Styled className="header">
      <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" />
      <span>Hello</span>
    </Styled>
  );
};

export default Header;

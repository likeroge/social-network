import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import tw from 'twin.macro'

const Styled = styled.nav`
  grid-area: n;
  background-color: rgb(61, 175, 147);
  height: 100%;
  min-height: 80vh;
  color: white;

  a{
    font-size: 1.3rem;
  }

  .active {
    color: gold;
  }
`;

const Navbar = () => {
  return (
    <Styled className="px-4 py-4">
      <div className="item pb-2">
        <NavLink activeClassName='active' to="/profile">Profile</NavLink>
      </div>
      <div className="item pb-2">
        <NavLink activeClassName='active' to="/dialogs">Messages</NavLink>
      </div>
      <div className="item pb-2">
        <a href="">News</a>
      </div>
      <div className="item pb-2">
        <a href="">Music</a>
      </div>
      <div className="item pb-2">
        <a href="">Settings</a>
      </div>
    </Styled>
  );
};

export default Navbar;


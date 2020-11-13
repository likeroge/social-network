import React from "react";
import styled from "styled-components";
import MyPosts from "./MyPosts";
import { ProfileInfo } from "./ProfileInfo";

const Styled = styled.div`
  
  height: 100%;
  color: white;

  img {
    height: 30%;
  }
`;

const Profile = () => {
  return (
    <Styled>
      <ProfileInfo/>
      <MyPosts />
    </Styled>
  );
};

export default Profile;

import React from "react";
import styled from "styled-components";
import MyPosts from "./MyPosts";

const Styled = styled.div`
  
  height: 100%;
  color: white;

  img {
    height: 30%;
  }
`;

const Profile = () => {
  return (
    <Styled className="content">
      <div>
        <img className='h-3 inline-block' src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
      </div>
      <div>Ava + desc</div>
      <MyPosts />
    </Styled>
  );
};

export default Profile;

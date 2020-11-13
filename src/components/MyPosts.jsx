import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Post } from "./Post";

const Styled = styled.div`
  #text-area {
    resize: none;
    width: 80%;
    display: block;
    color: black;
  }
  ${tw`text-xl`}
  .btn-add {
    margin-top: 10px;
    ${tw`bg-blue-500 inline-block p-2 px-2 hover:bg-blue-700 font-bold shadow-2xl outline-none rounded`}
  }
  .btn-clear {
    margin-top: 10px;
    margin-left: 10px;
    ${tw`bg-red-500 inline-block p-2 px-6 hover:bg-red-700 font-bold shadow-2xl outline-none rounded`}
  }
`;

const MyPosts = () => {
  return (
    <Styled>
      My posts
      <div className="ml-4">
        <textarea id="text-area"></textarea>
        <button className="btn-add">Add post</button>
        <button className="btn-clear">Clear</button>
      </div>
      <div className="posts">
        <Post message="id unde amet officia aspernatur, libero, itaque deleniti
        modi harum quibusdam necessitatibus debitis illo fugiat delectus ratione
        neque esse odit." />
        <Post message='Distinctio, quos laudantium? Laborum, ad ab? Magni
        inventore voluptate ipsa sunt? Fugit maxime assumenda quae dolorum
        voluptatibus deserunt?'/>
        <Post message = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        facere nam enim id unde amet officia aspernatur, libero, itaque deleniti
        modi harum'/>
        <Post message = 'libero, itaque delasdasdasdasdad
        modi harum quibusdam necessitatibus debitis illo fugiat delectus ratione
        neque esse odit. Distinctio, quos laudantium? Laborum, ad ab? Magni'/>
      </div>
    </Styled>
  );
};

export default MyPosts;
